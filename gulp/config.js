var dest = './.tmp',
    src = './Private',
    build = './Public';

module.exports = {
    browserSync: {
        init: dest + '/**',
        server: {
            baseDir: dest,
            directory: true,
            notify: false,
            browser: 'google chrome'
        }
    },
    sass: {
        src: src + '/Stylesheets/app.scss',
        dest: dest + '/Stylesheets',
        settings: {
            includePaths: require('node-bourbon').includePaths,
            sourceComments: 'map'
        }
    },
    // images: {
    //   src: src + "/images/**",
    //   dest: dest + "/images"
    // },
    markup: {
        src: src + '/Html',
        dest: dest + '/Templates'
    },
    browserify: {
        entries: src + '/JavaScript/main.js',
        dest: dest + '/JavaScript',
        outputName: 'main.js'
    }
    // production: {
    //   cssSrc: dest + '/*.css',
    //   jsSrc: dest + '/*.js',
    //   dest: dest
    // }
};
