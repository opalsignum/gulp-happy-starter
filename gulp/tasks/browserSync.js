'use strict';

var gulp = require('gulp'),
    config = require('../config').browserSync,
    browserSync = require('browser-sync');

// TODO: Jshint sollte browserSync aufrufen
gulp.task('browserSync', [
    'browserify', 'sass', 'jade'
    // gulp.task('browserSync', [
    //     'browserify', 'coffeelint',
    //     'copyCssJsHtml', 'copyOther',
    //     'sass', 'images', 'jade'
], function() {
    // watch dir for changes
    browserSync.init(config.init, {
        server: config.server
    });
});
