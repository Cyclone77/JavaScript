'use strict';

{
    let a = 10;
    var b = 1;
}

//console.log(a); //ReferenceError: a is not defined
console.log(b);


for (let i = 0; i < 10; i++) {}

//console.log(i); //ReferenceError: a is not defined

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}
a[6](); //10

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = (function(j) {
        return function() {
            console.log(j)
        }
    })(i);
}
a[5](); //5

for (var i = 0; i < 4; i++) {
    var i = "abc";
    console.log(i);
}

for (let i = 0; i < 4; i++) {
    let i = "abc";
    console.log(i);
}

// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
//console.log(bar); // 报错ReferenceError
let bar = 2;

var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError
    //let tmp;
    let a = "abs";
    this;
}

console.log(tmp);


function f1() {
    let n = 5;
    this;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();

// ES5 环境
function f() { console.log('I am outside!'); }

(function() {
    function f() { console.log('I am inside!'); }
    if (false) {}
    f();
}());

'use strict';
// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function() {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());

// 不报错
'use strict';
if (true) {
    function f() {}
}

// 报错
//'use strict';
//if (true)
//function f() {}



const PI = 3.1415;
PI // 3.1415

//PI = 3;
// TypeError: Assignment to constant variable.