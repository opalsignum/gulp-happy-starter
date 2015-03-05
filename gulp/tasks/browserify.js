/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

'use strict';

var gulp = require('gulp'),
    config = require('../config').browserify,
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    watchify = require('watchify'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('browserify', ['jshint'], function() {
    var bundler = browserify({
        // Required watchify args
        cache: {},
        packageCache: {},
        fullPaths: true,
        // Specify the entry point of your app
        entries: [config.entries],
        // Add file extentions to make optional in your requires
        // extensions: ['.coffee'],
        debug: global.isWatching
    });

    var bundle = function() {
        // Log when bundling starts
        bundleLogger.start();

        return bundler
            .bundle()
            // Report compile errors
            .on('error', handleErrors)
            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specifiy the
            // desired output filename here.
            .pipe(source(config.outputName))
            .pipe(buffer())
            .pipe(uglify())
            // Specify the output destination
            .pipe(gulp.dest(config.dest))
            // Log when bundling completes!
            .on('end', bundleLogger.end);
    };

    if (global.isWatching) {
        bundler = watchify(bundler);
        // Rebundle with watchify on changes.
        bundler.on('update', bundle);
    }

    return bundle();
});
