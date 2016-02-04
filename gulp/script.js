/**
 * @fileOverview resolve script
 * @author xuguanlong
 */

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpackConfig = require('./config/webpack.config');
var webpack = require('gulp-webpack');
var underscore = require('underscore');
var clean = require('gulp-clean');
var rename = require('gulp-rename');

gulp.task('clean', function() {
	return gulp
		.src('./dist/*.js')
		.pipe(clean());
});
gulp.task('script', ['clean'], function(cb) {
    return gulp
        .src('./src/Emove.js')
        .pipe(webpack(webpackConfig.option))
        .pipe(gulp.dest('./dist'));
});
gulp.task('min:script', ['script'], function(cb) {
    return gulp
        .src('./dist/Emove.js')
        .pipe(uglify())
        .pipe(rename({
        	extname: '.min.js'
        }))
        .pipe(gulp.dest('./dist'));
});
