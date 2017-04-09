var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    pug = require('gulp-pug'),
    minimify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream')

var paths = {
  cssSource: 'src/css/**/*.css',
  cssDestination: 'css/',
  htmlSource: 'src/pug/*.pug',
  htmlDestination: './'
}

gulp.task('html', function() {
  return gulp.src(paths.htmlSource)
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(paths.htmlDestination))
})

gulp.task('styles', function() {
  return gulp.src(paths.cssSource)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDestination))
})

gulp.task('example', function() {
  return gulp.src('src/js/example/example.js')
    .pipe(webpackStream({
      output: {
        filename: 'example.js',
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
      }
    }))
    .pipe(minimify())
    .pipe(gulp.dest('js'))
})

gulp.task('default', ['html', 'styles', 'example'])
