'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

// TODO: Build Prozess anpassen
// Build Production Files, the Default Task
gulp.task('build', function(cb) {
    runSequence('clean', [
        'browserify', 'coffeelint',
        'copyCssJsHtml', 'copyOther',
        'sass', 'images', 'jade'
    ], ['optimize'], cb);
});
