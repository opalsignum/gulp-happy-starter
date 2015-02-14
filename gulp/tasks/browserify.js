/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var gulp = require('gulp'),
    config = require('../config').browserify,
    browserify = require('browserify'),
    watchify = require('watchify'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function() {
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
