var dest = './.tmp';
var src = './Private';
var build = './Public';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: './',
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
            // indentedSyntax: true, // Enable .sass syntax!
            // imagePath: 'images' // Used by the image-url helper
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
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/JavaScript/main.js',
            dest: dest + '/JavaScript',
            outputName: 'main.js'
            // list of externally available modules to exclude from the bundle
            // external: ['jquery', 'underscore']
        }]
    }
    // production: {
    //   cssSrc: dest + '/*.css',
    //   jsSrc: dest + '/*.js',
    //   dest: dest
    // }
};
