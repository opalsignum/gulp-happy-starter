var browserSync = require('browser-sync');
    gulp = require('gulp'),
    config = require('../config').browserSync;

gulp.task('browserSync', [
    'sass', 'jade'
    // gulp.task('browserSync', [
    //     'browserify', 'coffeelint',
    //     'copyCssJsHtml', 'copyOther',
    //     'sass', 'images', 'jade'
], function() {
    // watch dir for changes
    browserSync.init(config.init, {
        server: config.server
    });
});
