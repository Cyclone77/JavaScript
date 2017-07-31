;
(function($) {
    /*
     * 字符串函数
     */
    $.str = {
        /*
         *  param {字符串} s
         */
        format: function(s) {
            if (arguments.length < 2)
                return s;
            for (var i = 1; i < arguments.length; i++) {
                var re = new RegExp("\\{" + (i - 1) + "\\}", "gm");
                s = s.replace(re, arguments[i]);
            }
            return s;
        }
    };

    $.extend(Array.prototype, {
        indexOfProp: function(propName, v) {
            for (var i = this.length - 1; i >= 0; i--)
                if (this[i][propName] == v) return i;
            return -1;
        },
        findOfProp: function(propName, value) {
            var index = this.indexOfProp(propName, value);
            return index >= 0 ? this[index] : null;
        }
    })
})(jQuery);