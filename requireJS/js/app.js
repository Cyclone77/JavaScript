requirejs.config({

    config: {

        'app/c': {

            size: 'large'

        },

        'app/d': {

            color: 'blue'

        }

    }

});
require(['app/c'], function(c) {

    console.log(c);

});

require(['d'], function(d) {

    console.log(d);

}, function(err) {
    var failedId = err.requireModules && err.requireModules[0];

    if (failedId === 'd') {

        requirejs.undef(failedId);

    }
});