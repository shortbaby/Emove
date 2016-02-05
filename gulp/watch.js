/**
 * @fileOverview resolve script
 * @author xuguanlong
 */

'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    gulp.watch('./src/*.js', ['script']);
    gulp.watch('./src/**/*.js', ['script']);
});
