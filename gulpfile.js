var gulp = require('gulp');
var bump = require('gulp-bump');


gulp.task('bump:minor', function() {
  gulp.src('./package.json')
    .pipe(bump({ type: 'minor' }))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:patch', function() {
  gulp.src('./package.json')
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'));
});

