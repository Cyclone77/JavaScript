require.config({
    baseUrl: "./js/app",
    paths: {
        jquery: "../lib/jquery1.9.1"
    }
});

require(["a", "jquery"], function(a, $) {
    console.log(a);
    $("body").css("background-color", "red");
    console.log($().jquery);
});