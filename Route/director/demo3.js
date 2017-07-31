$(function() {
    _loadIssuesData();
    var router = Router({
        'page/:index': showAuthorInfo,
        'page/:index/:id': listBooks
    });
    router.configure({
        on: allroutes
    });

    router.init();
})

var _gp = {
    Data: null,
    SelectIndex: 1
};

function showAuthorInfo(index) {
    _gp.SelectIndex = index;
    _loadIssuesData(index);
    console.log("showAuthorInfo");
};

function listBooks(index, id) {
    _gp.SelectBookId = id;
    console.log("listBooks:" + id);
    if (!!_gp.Data) {
        var data = _gp.Data.findOfProp("id", id);
        var bodyCon = marked(data.body);
        $(".bookContent").html(bodyCon);
    }
};

function allroutes() {
    var route = window.location.hash.slice(2);
    console.log(route);
}

function _loadIssuesData(index, num) {
    $.support.cors = true;
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
            _bulidHtml(data.data || data);
        },
        error: function() {

        }
    });
}

//构建界面
function _bulidHtml(res) {
    if (!res) return;
    _gp.Data = res;
    var content = document.getElementById("divPageContent");
    var arr = [];
    res.forEach(function(item) {
        var title = item.title,
            labelsHTML = [];
        var html = $.str.format('<li><a href="#/page/{2}/{1}">{0}</a></li>', title, item.id, _gp.SelectIndex);
        arr.push(html)
    });
    content.innerHTML = arr.join("");

}