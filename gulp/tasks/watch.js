/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.sass.src, ['sass']);
    // gulp.watch('src/styles/**/*.css', ['copyCssJsHtml']);

    gulp.watch(config.markup.src + '/**/*.jade', ['jade']);
    // gulp.watch('src/templates/**/*.html', ['copyCssJsHtml']);

    // gulp.watch('src/scripts/**/*.coffee', ['coffeelint']);
    // gulp.watch('src/scripts/**/*.js', ['copyCssJsHtml']);

    // gulp.watch('src/images/**', ['images']);

    // gulp.watch('src/fonts/**', ['copyOther']);
    // gulp.watch('src/sounds/**', ['copyOther']);


});
