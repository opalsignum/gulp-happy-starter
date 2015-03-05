'use strict';

var gulp = require('gulp'),
    config = require('../config').markup,
    jade = require('gulp-jade'),
    jadeInheritance = require('gulp-jade-inheritance'),
    gulpMultinject = require('gulp-multinject'),
    minifyHTML = require('gulp-minify-html'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    filter = require('gulp-filter'),
    gulpif = require('gulp-if'),
    // flatten = require('gulp-flatten'),
    plumber = require('gulp-plumber'),
    handleErrors = require('../util/handleErrors');

gulp.task('jade', function() {
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
        .pipe(gulpMultinject([
                '../Stylesheets/app.css'
            ],
            'cssApp', {
                relative: true,
                urlPrefix: ''
            }
        ))
        .pipe(gulpMultinject([
                '../JavaScript/vendor.js'
            ],
            'jsVendor', {
                relative: true,
                urlPrefix: ''
            }
        ))
        .pipe(gulpMultinject([
                '../JavaScript/app.js'
            ],
            'jsApp', {
                relative: true,
                urlPrefix: ''
            }
        ))
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.dest));
});
