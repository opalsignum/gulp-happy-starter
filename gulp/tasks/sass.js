'use strict';

var gulp = require('gulp'),
    config = require('../config').sass,
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    handleErrors = require('../util/handleErrors');

// Compile and Automatically Prefix Stylesheets
gulp.task('sass', function() {
    // For best performance, don't add Sass partials to `gulp.src`
    return gulp.src(config.srcFiles)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(sourcemaps.init({}))
        .pipe(sass(config.settings))
        .pipe(autoprefixer({
            browsers: ['Chrome >= 37']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));
});
