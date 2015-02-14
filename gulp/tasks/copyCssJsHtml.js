'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed');

// TODO: Sobald .tmp verwendet wird, müssen Assets von 'src' nach '.tmp' kopiert werden
gulp.task('copyCssJsHtml', function() {
    var dest = '.tmp/assets';

    // TODO: Pfade anpassen
    return gulp.src(['src/styles/**/*.css', 'src/scripts/**/*.js', 'src/templates/**/*.html'])
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(gulp.dest(dest));
});
