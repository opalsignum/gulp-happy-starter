'use strict';

var gulp = require('gulp'),
    config = require('../config').jsonConcat,
    concat = require('gulp-concat'),
    insert = require('gulp-insert'),
    prettify = require('gulp-jsbeautifier');

gulp.task('jsonConcat', function() {
    gulp.src(config.src)
        .pipe(insert.append(','))
        .pipe(concat(config.outputName))
        .pipe(insert.wrap('{', '"lastkey": "lastvalue"}'))
        .pipe(prettify())
        .pipe(gulp.dest(config.dest));
});
