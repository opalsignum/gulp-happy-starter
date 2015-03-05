'use strict';

var dest = './Public',
    src = './Private';

module.exports = {
    browserSync: {
        init: dest + '/**',
        server: {
            baseDir: './Public',
            directory: true,
            notify: false,
            browser: 'google chrome'
        }
    },
    markup: {
        src: src + '/Templates',
        srcFiles: [src + '/Templates/**/*.jade'],
        dest: dest + '/Templates'
    },
    sass: {
        src: src + '/Stylesheets/app.scss',
        dest: dest + '/Stylesheets',
        settings: {
            includePaths: require('node-bourbon').includePaths,
            sourceComments: 'map'
        }
    },
    browserify: {
        entries: src + '/JavaScript/main.js',
        dest: dest + '/JavaScript',
        outputName: 'main.js'
    },
    jshint: {
        src: [
            src + '/JavaScript/modules/**/*.js',
            src + '/JavaScript/*.js',
            'gulp/**/*.js'
        ]
    },
    clean: {
        target: [
            dest + '/*.html',
            dest + '/Templates/**/*',
            dest + '/JavaScript/**/*',
            dest + '/Stylesheets/**/*'
        ]
    }
    // copy: {
    //     srcJSFiles: src + '/JavaScript/vendor/**/*',
    //     destJS: dest + '/JavaScript/vendor'
    // }
};
