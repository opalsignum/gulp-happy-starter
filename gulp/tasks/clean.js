'use strict';

var gulp = require('gulp'),
    config = require('../config').clean,
    del = require('del');

// Clean Output Directory
gulp.task('clean', del.bind(null, config.target));
