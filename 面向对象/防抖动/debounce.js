;
(function(global) {
    function debounce(fn, delay) {
        var timer;

        return function() {
            var context = this,
                args = arguments;
            clearTimeout(timer);

            timer = setTimeout(function() {
                fn.apply(context, args);
            }, delay);
        }
    }
    global.debounce = debounce;
})(window);