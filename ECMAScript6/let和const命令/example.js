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
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}
a[6](); //10

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}
a[6](); //10