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

function rain() {
    var x = 1;

    function man() {
        var x = 100;
    }
    man(); //调用man
    console.log(x); //这里会弹出 100
}
rain(); //调用rain


var name = 'laruence';

function echo() {
    console.log(name);
}

function env() {
    var name = 'eve';
    echo();
}

env();