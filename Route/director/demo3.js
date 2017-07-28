$(function() {
    _loadIssuesData();
    var router = Router({
        'page/:index': showAuthorInfo,
        '/books': listBooks
    });
    router.configure({
        on: allroutes
    });

    router.init();
})

function showAuthorInfo(index) {
    _loadIssuesData(index);
    console.log("showAuthorInfo");
};

function listBooks() {
    console.log("listBooks");
};

function allroutes() {
    var route = window.location.hash.slice(2);
    console.log(route);
}

function _loadIssuesData(index, num) {
    $.ajax({
        url: "https://api.github.com/repos/lifesinger/blog/issues",
        data: {
            filter: 'created',
            page: index || 1,
            per_page: num || 5
        },
        //crossDomain: true,
        xhrFields: {
            //withCredentials: true
        },
        //contentType: "application/x-www-form-urlencoded, multipart/form-data",
        type: "GET",
        //dataType: "jsonp",
        success: function(data, textStatus, jqXHR) {
            //Store("local").set("Cyclone77-GitHub-Blog", JSON.stringify(data.data || data));
            _bulidHtml(data.data || data);
        },
        error: function() {

        }
    });
}

//构建界面
function _bulidHtml(res) {
    if (!res) return;
    var content = document.getElementById("divPageContent");
    var arr = [];
    res.forEach(function(item) {
        var title = item.title,
            labelsHTML = [];
        var html = '<li>' + title + '</li>';
        arr.push(html)
    });
    content.innerHTML = arr.join("");

}