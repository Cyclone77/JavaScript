namespace('calculator', ['math'], function(m) {
    var action = 'add';

    function compute(a, b) {
        return m[action](a, b);
    }
    return {
        compute: compute
    }
});
