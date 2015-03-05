/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

'use strict';

var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.markup.srcFiles, ['jade']);
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.jshint.src, ['jshint']);
});
