'use strict';

var gulp = require('gulp'),
    config = require('../config').copy,
    changed = require('gulp-changed');

gulp.task('copyCssJsHtml', function() {
    return gulp.src(config.srcJSFiles)
        .pipe(changed(config.destJS)) // Ignore unchanged files
        .pipe(gulp.dest(config.destJS));
});
