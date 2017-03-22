var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream');

var paths = {
  cssSource: 'src/css/',
  cssDestination: 'css/'
};

gulp.task('styles', function() {
  return gulp.src(paths.cssSource + '**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDestination));
});

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
    .pipe(gulp.dest('js'));
})

gulp.task('default', ['styles', 'example']);
