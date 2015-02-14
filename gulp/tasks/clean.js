'use strict';

var gulp = require('gulp'),
    del = require('del');

// TODO: Clean Task evtl. anpassen, je nachdem ob .tmp ... benötigt wird
// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));
