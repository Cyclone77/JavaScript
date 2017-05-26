
'use strict';

foo();
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    bar();
    console.log('x in foo() = ' + x); // 1
}

function foo1() {
    let x = 'Hello, ' + y; //
    console.log(x);
    var y = 'Bob'; 
}

foo1();
