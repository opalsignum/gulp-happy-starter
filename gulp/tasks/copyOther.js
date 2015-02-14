'use strict';

var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    changed = require('gulp-changed');

// TODO: Sobald .tmp verwendet wird, müssen restliche Assets von 'src' nach '.tmp' kopiert werden
gulp.task('copyOther', function() {
    var dest = '.tmp/assets';

    // TODO: Pfade anpassen
    return gulp.src(['src/fonts/**', 'src/sounds/**'])
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(gulpIf(global.isWatching, gulp.dest(dest))) // for development
        .pipe(gulpIf(!global.isWatching, gulp.dest('dist/assets'))); // for dist
});
