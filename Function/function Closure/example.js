fn();

function fn() {
    console.log("函数声明提升");
}

var condition = true;
if (condition) {
    function sayHi1() {
        console.log("Hi!");
    }
} else {
    function sayHi2() {
        console.log("Yo!");
    }
}

sayHi1();
sayHi2();
var control = {

    ondatabind: function (that, e) {
        e = null;
        return e;
    }
}
var psn = {
    name: "zhangsan"
};

var doEvt = function (name, p1, p2, p3) {
    if (control.isDesignMode)
        return control;
    var pnew = control[name](control, p1, p1, p1);
    return control;
};

doEvt("ondatabind", psn);

function edit(obj) {
    obj.name = null;
    obj = null;
}

edit(psn);
console.log(psn);

function func() {
    for (var i = 0; i < 5; i++) {
        func1(i);
    }
}

function func1(j) {
    setTimeout(function () {
        console.log(j)
    }, 0);
}

func();


