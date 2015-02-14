'use strict';

var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin');

// TODO: Falls Bilder optimiert werden sollen, diesen Task in default aufnehmen
gulp.task('images', function() {
    var dest = '.tmp/assets';

    // TODO: Pfade anpassen (separaten Build Task beachten)
    return gulp.src('src/images/**')
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulpIf(global.isWatching, gulp.dest(dest))) // for development
        .pipe(gulpIf(!global.isWatching, gulp.dest('dist/assets'))); // for dist
});
