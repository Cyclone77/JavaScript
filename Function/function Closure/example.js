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
//sayHi2();
var control = {

    ondatabind: function(that, e) {
        e = null;
        return e;
    }
}
var psn = {
    name: "zhangsan"
};

var doEvt = function(name, p1, p2, p3) {
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
        (function func1(j) {
            setTimeout(function() {
                console.log(j)
            }, 0);
        })(i);
    }
}



func();

function step1() {
    console.log("hi step1");
}

function step(fn) {
    fn = null;
}

step(step1);
step1();


function myfunc1() {
    var data = 100;

    function func_1() {
        data = data * 5;
    }

    function func_n() {
        console.log(data);
    }
    func_1();
    func_n();
}
myfunc1();

function MyObject() {
    function func() {
        // ...
    }
    this.doFunc = func;
}
var obj1 = new MyObject();
var obj2 = new MyObject()

console.log(obj1.doFunc == obj2.doFunc);
console.log(obj1.doFunc.toString());


function test1() {
    console.log("test1");
}

var test2 = test1;
test1 = null;
console.log(test2 === test1);