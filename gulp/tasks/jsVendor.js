'use strict';

var gulp = require('gulp'),
    config = require('../config').jsVendor,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('jsVendor', function() {
    return gulp.src(config.src)
        .pipe(concat(config.outputName))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});
