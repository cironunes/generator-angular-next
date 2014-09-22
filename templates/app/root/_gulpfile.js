var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var _       = require('lodash');

var karma   = require('karma').server;
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
    .pipe($.connect.reload());
});

gulp.task('images', function() {
  return gulp.src('./app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

gulp.task('js', ['inject', 'jshint'], function() {
  gulp.src('./app/**/*.js')
    .pipe($.connect.reload());
});

gulp.task('inject', function() {
  gulp.src('./app/index.html')
    .pipe($.inject(
      gulp.src('./app/app.js', { read: false }), { name: 'app', relative: true }
    ))
    .pipe($.inject(
      gulp.src(['./app/**/*.js', '!./app/app.js', '!./app/{bower_components,bower_components/**/*.js}'])
        .pipe($.angularFilesort()), { relative: true }
    ))
    .pipe(gulp.dest('./app'));
});

gulp.task('jshint', function() {
  return gulp.src(['app/**/*.js', '!app/{bower_components,bower_components/**/*.js}'])
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('css', function() {
  return gulp.src(['app/app.scss'])
    .pipe($.compass({
      sass: 'app',
      css: 'app'
    }))
    .pipe(gulp.dest('./app'))
    .pipe($.connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['.app/index.html', './app/**/*.html'], ['html']);
  $.watch({ glob: ['app/app.js', 'app/**/*.js'] }, function() {
    gulp.start('js');
  });
  gulp.watch(['./app/**/*.scss', './app/**/**/*.scss'], ['css']);
});

gulp.task('serve', ['css', 'watch'], function() {
  $.connect.server({
    root: 'app',
    livereload: true
  });

  gulp.src('./app/**/*.html')
    .pipe($.open('', { url: 'http://localhost:8080' }));
});

gulp.task('default', ['tdd']);


