'use strict';

var dest = './Public',
    src = './Private';

module.exports = {
    browserSync: {
        init: dest + '/**',
        server: {
            baseDir: './Public',
            // directory: true,
            notify: false,
            browser: 'google chrome'
        }
    },
    markup: {
        src: src + '/Templates',
        srcFiles: [
            src + '/index.jade',
            src + '/Templates/**/*.jade'
        ],
        dest: dest + '/Templates'
    },
    sass: {
        src: src + '/Stylesheets/**/*.scss',
        srcFiles: src + '/Stylesheets/app.scss',
        dest: dest + '/Stylesheets',
        settings: {
            includePaths: require('node-bourbon').includePaths,
            sourceComments: 'map'
        }
    },
    browserify: {
        entries: src + '/JavaScript/app.js',
        dest: dest + '/JavaScript',
        outputName: 'app.js'
    },
    jshint: {
        src: [
            src + '/JavaScript/modules/**/*.js',
            src + '/JavaScript/*.js',
            'gulp/**/*.js'
        ]
    },
    jsVendor: {
        src: [
            src + '/JavaScript/vendor/vendor_a.js',
            src + '/JavaScript/vendor/vendor_b.js',
            src + '/JavaScript/vendor/subfolder/vendor_sub.js'
        ],
        dest: dest + '/JavaScript',
        outputName: 'vendor.js'
    },
    clean: {
        target: [
            dest + '/*.html',
            dest + '/Templates/**/*',
            dest + '/JavaScript/**/*',
            dest + '/Stylesheets/**/*'
        ]
    }
};
