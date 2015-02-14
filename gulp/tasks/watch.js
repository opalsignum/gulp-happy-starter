/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

'use strict';

var gulp = require('gulp'),
    config = require('../config');

// TODO: Bei Bedarf weitere Tasks hinzufügen
gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.sass.src, ['sass']);
    // gulp.watch('src/styles/**/*.css', ['copyCssJsHtml']);

    gulp.watch(config.markup.srcFiles, ['jade']);

    gulp.watch(config.jshint.src, ['jshint']);

    // gulp.watch('src/images/**', ['images']);
    //
    // gulp.watch('src/fonts/**', ['copyOther']);
});
