'use strict';

var foo = (function() {
    var init = function() {
        console.info('Init foo!');
    };

    return {
        init: init,
    };
})();

module.exports = foo;
