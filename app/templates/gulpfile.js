var gulp  = require('gulp');
var karma = require('karma').server;
var _     = require('lodash');

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

gulp.task('default', ['tdd']);

