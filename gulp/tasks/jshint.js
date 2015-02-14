'use strict';

var gulp = require('gulp'),
    config = require('../config').jshint,
    jshint = require('gulp-jshint');
    // plumber = require('gulp-plumber');

gulp.task('jshint', function() {
    gulp.src(config.src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
        // .pipe(jshint.reporter('fail'));
});
