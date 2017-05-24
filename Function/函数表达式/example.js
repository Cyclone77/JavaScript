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