(function() {
    'use strict';

    var bar = bar || {};

    bar.foo = require('./modules/foo');
    bar.fooBar = require('./modules/fooBar');

    bar.foo.init();
    bar.fooBar.init();
})();
