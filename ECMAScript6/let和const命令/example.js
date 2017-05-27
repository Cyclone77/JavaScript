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
}

console.log(tmp);