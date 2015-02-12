var gulp = require('gulp'),
    sass = require('gulp-sass'),
    handleErrors = require('../util/handleErrors'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config').sass;
// var autoprefixer    = require('gulp-autoprefixer');

// Compile and Automatically Prefix Stylesheets
gulp.task('sass', function() {
    // For best performance, don't add Sass partials to `gulp.src`
    return gulp.src(config.src)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(sourcemaps.init({}))
        .pipe(sass(config.settings))
        .pipe(sourcemaps.write())
        // .pipe(autoprefixer(AUTOPREFIXER_BROWSERS, { map: true }))
        .pipe(gulp.dest(config.dest));
});
