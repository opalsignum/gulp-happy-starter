'use strict';

var fooBar = (function() {
    var init = function() {
        console.info('Init fooBar!');
    };

    return {
        init: init,
    };
})();

module.exports = fooBar;
