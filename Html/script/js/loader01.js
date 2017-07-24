var Loader = (function() {
    var loadScript = function(url) {
        var script = document.createElement("script");
        script.setAttribute("src", url + "?rd=" + (+new Date()));
        script.async = false;
        document.body.appendChild(script);
    }
    var loadMultiScript = function(urlArr) {
        if (Object.prototype.toString.call(null, urlArr) == "") return;
        for (var i = 0, len = urlArr.length; i < len; i++) {
            loadScript(urlArr[i]);
        }
    }
    return {
        load: loadMultiScript
    }
})();