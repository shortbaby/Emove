var gulp = require('gulp');

gulp.task('build', ['min:script'], function(cb) {
    console.log('script build success!');
    cb();
});
