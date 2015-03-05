'use strict';

var gulp = require('gulp'),
    config = require('../config').jshint,
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    gulp.src(config.src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});
