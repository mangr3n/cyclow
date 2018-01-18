import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import del from 'del'
import glob from 'glob'
import path from 'path'
import {Instrumenter} from 'isparta'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import mochaGlobals from './test/setup/.globals'
import manifest from './package.json'
import open from 'gulp-open'
import http from 'http'
import connect from 'connect'
import serveStatic from 'serve-static'
import selenium from 'selenium-standalone'
import webdriver from 'gulp-webdriver'

import merge from 'merge-stream'
import fs from 'fs'

// Load all of our Gulp plugins
const $ = loadPlugins();

// Gather the library data from `package.json`
const config = manifest.babelBoilerplateOptions;
const mainFile = manifest.main;
const destinationFolder = path.dirname(mainFile);
const exportFileName = path.basename(mainFile, path.extname(mainFile));

let httpServer

gulp.task('http', done => {
  const app = connect().use(serveStatic('samples'));
  httpServer = http.createServer(app).listen(9000, done);
});

gulp.task('selenium', done => {
  selenium.install({
    logger (message) {
      process.stdout.write(`${message} \n`)
    },
    progressCb: (totalLength, progressLength) => {
      process.stdout.write(`Downloading drivers ${Math.round(progressLength / totalLength * 100)}% \r`)
    }
  }, err => {
    if (err) return done(err)

    selenium.start({
      spawnOptions: {
          stdio: 'ignore'
      }
    }, (err, child) => {
      selenium.child = child
      console.log('Selenium error: ', err)
      done()
    })
  })
})

gulp.task('test:e2e', ['http', 'selenium'], () => gulp.src('wdio.conf.js')
  .pipe(webdriver({
    logLevel: 'verbose',
    waitforTimeout: 12345,
    framework: 'mocha'
  })).once('end', () => {
    selenium.child.kill()
    httpServer.close()
  })
)

function cleanDist(done) {
  del([destinationFolder]).then(() => done());
}

function cleanTmp(done) {
  del(['tmp']).then(() => done());
}

function cleanSamples(done) {
  del(["samples/**/dist/*.*"]).then(() => done());
}

// Lint a set of files
function lint(files) {
  return gulp.src(files)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

function lintSrc() {
  return lint('src/**/*.js');
}

function lintTest() {
  return lint('test/**/*.js');
}

function lintGulpfile() {
  return lint('gulpfile.js');
}

function build() {
  return gulp.src(path.join('src', config.entryFileName))
    .pipe(webpackStream({
      output: {
        filename: `${exportFileName}.js`,
        libraryTarget: 'umd',
        library: config.mainVarName
      },
      // Add your own externals here. For instance,
      // {
      //   jquery: true
      // }
      // would externalize the `jquery` module.
      externals: {},
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules|samples/,
            loader: 'babel-loader'
          }
        ]
      },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest(destinationFolder))
    .pipe($.filter(['**', '!**/*.js.map']))
    .pipe($.rename(`${exportFileName}.min.js`))
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(destinationFolder));
}

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

function buildSamples() {
  var folders = getFolders('samples')

  var tasks = folders.map(function(folder) {
    return gulp.src(path.join(`samples/${folder}`, 'app.js'))
      .pipe(webpackStream({
        output: {
          filename: 'app.js',
          libraryTarget: 'umd',
          library: 'app'
        },
        externals: {},
        module: {
          loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            }
          ]
        },
        devtool: 'source-map'
      }))
      .pipe(gulp.dest(`samples/${folder}/dist`))
      .pipe($.filter(['**', '!**/*.js.map']))
      .pipe($.rename('app.min.js'))
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(`samples/${folder}/dist`));
  })

  return merge(tasks);
}

function openSamples() {
  gulp.src('./samples/index.html')
    .pipe(open());
}

function _mocha() {
  return gulp.src(['test/setup/node.js', 'test/unit/**/*.js'], {read: false})
    .pipe($.mocha({
      reporter: 'dot',
      globals: Object.keys(mochaGlobals.globals),
      ignoreLeaks: false
    }));
}

function _registerBabel() {
  require('babel-register');
}

function test() {
  _registerBabel();
  return _mocha();
}

function coverage(done) {
  _registerBabel();
  gulp.src(['src/**/*.js'])
    .pipe($.istanbul({
      instrumenter: Instrumenter,
      includeUntested: true
    }))
    .pipe($.istanbul.hookRequire())
    .on('finish', () => {
      return test()
        .pipe($.istanbul.writeReports())
        .on('end', done);
    });
}

const watchFiles = ['src/**/*', 'test/**/*', 'package.json', '**/.eslintrc'];

// Run the headless unit tests as you make changes.
function watch() {
  gulp.watch(watchFiles, ['test']);
}

function testBrowser() {
  // Our testing bundle is made up of our unit tests, which
  // should individually load up pieces of our application.
  // We also include the browser setup file.
  const testFiles = glob.sync('./test/unit/**/*.js');
  const allFiles = ['./test/setup/browser.js'].concat(testFiles);

  // Lets us differentiate between the first build and subsequent builds
  var firstBuild = true;

  // This empty stream might seem like a hack, but we need to specify all of our files through
  // the `entry` option of webpack. Otherwise, it ignores whatever file(s) are placed in here.
  return gulp.src('')
    .pipe($.plumber())
    .pipe(webpackStream({
      watch: true,
      entry: allFiles,
      output: {
        filename: '__spec-build.js'
      },
      // Externals isn't necessary here since these are for tests.
      module: {
        loaders: [
          // This is what allows us to author in future JavaScript
          {test: /\.js$/, exclude: /node_modules|samples/, loader: 'babel-loader'},
          // This allows the test setup scripts to load `package.json`
          {test: /\.json$/, exclude: /node_modules|samples/, loader: 'json-loader'}
        ]
      },
      plugins: [
        // By default, webpack does `n=>n` compilation with entry files. This concatenates
        // them into a single chunk.
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
      ],
      devtool: 'inline-source-map'
    }, null, () => {
      if (firstBuild) {
        $.livereload.listen({port: 35729, host: 'localhost', start: true});
        gulp.watch(watchFiles, ['lint']);
      } else {
        $.livereload.reload('./tmp/__spec-build.js');
      }
      firstBuild = false;
    }))
    .pipe(gulp.dest('./tmp'));
}

// Remove the built files
gulp.task('clean', cleanDist);

// Remove our temporary files
gulp.task('clean-tmp', cleanTmp);

gulp.task('clean-samples',cleanSamples)

// Lint our source code
gulp.task('lint-src', lintSrc);

// Lint our test code
gulp.task('lint-test', lintTest);

// Lint this file
gulp.task('lint-gulpfile', lintGulpfile);

// Lint everything
gulp.task('lint', ['lint-src', 'lint-test', 'lint-gulpfile']);

// Build two versions of the library
gulp.task('build', ['lint', 'clean'], build);

gulp.task('samples:build', ['build','clean-samples'], buildSamples);

gulp.task('samples:open', ['samples:build'], openSamples);

// Lint and run our tests
gulp.task('test', ['lint'], test);

// Set up coverage and run tests
gulp.task('coverage', ['lint'], coverage);

// Set up a livereload environment for our spec runner `test/runner.html`
gulp.task('test-browser', ['lint', 'clean-tmp'], testBrowser);

// Run the headless unit tests as you make changes.
gulp.task('watch', watch);

// An alias of test
gulp.task('default', ['test']);
