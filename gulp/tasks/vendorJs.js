'use strict';

var gulp = require('gulp'),
    config = require('../config').vendorJs,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('vendorJs', function() {
    gulp.src(config.src)
        .pipe(concat(config.destFileName))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});
