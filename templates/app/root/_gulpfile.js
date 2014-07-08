var gulp    = require('gulp');
var connect = require('gulp-connect');
var open    = require('gulp-open');
var jshint  = require('gulp-jshint');
var karma   = require('karma').server;
var _       = require('lodash');

var karmaCommonConf = require('./karma.conf.js');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start(karmaCommonConf, done);
});

gulp.task('html', function() {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('js', ['jshint'], function() {
  gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src(['app/**/*.js', '!app/{bower_components,bower_components/**/*.js}'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch(['.app/index.html', './app/**/*.html'], ['html']);
  gulp.watch(['.app/app.js', './app/**/*.js'], ['js']);
});

gulp.task('serve', ['watch'], function() {
  connect.server({
    root: 'app',
    livereload: true
  });

  gulp.src('./app/**/*.html')
    .pipe(open('', { url: 'http://localhost:8080' }));
});

gulp.task('default', ['tdd']);

