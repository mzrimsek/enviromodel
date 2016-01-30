var gulp = require('gulp');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var reactify = require('reactify');
var serve = require('gulp-serve');

function buildScript(watch) {
  var props = {
    entries: ["./app/app.jsx"],
    debug: true,
    transform: [babelify, reactify],
    cache: {},
    packageCache: {}
  };
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source("bundle.js"))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest("dist/js"));
  }
  bundler.on('update', () => {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();
}

gulp.task('jade', () => {
  return gulp.src('public/templates/*.jade')
    .pipe(jade())
    .on('error', gutil.log.bind(gutil, 'Jade Error'))
    .pipe(gulp.dest("dist"));
});

gulp.task('sass', () => {
  var processors = [autoprefixer, cssnano];
  return gulp.src('public/scss/*.scss')
    .pipe(sass())
    .on('error', gutil.log.bind(gutil, 'Sass Error'))
    .pipe(postcss(processors))
    .pipe(gulp.dest("dist/css"));
});

gulp.task('images', function() {
  return gulp.src('public/images/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('app', () => {
  buildScript(false);
});

gulp.task('watch-app', () => {
  buildScript(true);
});

gulp.task('public', ['jade', 'sass', 'images']);

gulp.task('watch-public', () => {
  gulp.watch(['public/scss/*.scss', 'public/templates/*.jade'], ['public']);
});

gulp.task('build', ['public', 'app']);

gulp.task('watch', ['watch-public', 'watch-app']);

gulp.task('serve', ['watch'], serve({
  root: ['dist'],
  port: 3000
}));
