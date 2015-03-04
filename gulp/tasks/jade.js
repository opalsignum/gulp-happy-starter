'use strict';

var gulp = require('gulp'),
    config = require('../config').markup,
    jade = require('gulp-jade'),
    jadeInheritance = require('gulp-jade-inheritance'),
    es = require('event-stream'),
    series = require('stream-series'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    filter = require('gulp-filter'),
    gulpif = require('gulp-if'),
    // flatten = require('gulp-flatten'),
    plumber = require('gulp-plumber'),
    handleErrors = require('../util/handleErrors');

gulp.task('jade', function() {
    var jsVendorStream = gulp.src(config.jsVendor, {
            read: false
        })
        .pipe(concat(config.destFileName))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest)),
        jsMainStream = gulp.src(config.jsMain, {
            read: false
        });
    return gulp.src(config.srcFiles)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        // only pass unchanged *main* files and *all* the partials
        .pipe(changed(config.dest, {
            extension: '.html'
        }))
        // filter out unchanged partials, but it only works when watching
        .pipe(gulpif(global.isWatching, cached('jade')))
        // find files that depend on the files that have changed
        .pipe(jadeInheritance({
            basedir: config.src
        }))
        // filter out partials (folders and files starting with "_" )
        .pipe(filter(function(file) {
            return !/\/_/.test(file.path) || !/^_/.test(file.relative);
        }))
        .pipe(jade({
            pretty: !global.isWatching
        }))
        .pipe(inject(series(jsVendorStream, jsMainStream), {
            relative: true
        }))
        // .pipe(flatten())
        .pipe(gulp.dest(config.dest));
});
