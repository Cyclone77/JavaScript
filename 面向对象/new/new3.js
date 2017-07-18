function foo() {
    // 如果忘了使用关键字，这一步骤会悄悄帮你修复这个问题 
    if (!(this instanceof foo)) return new foo();
    // 构造函数的逻辑继续…… 
}


var name = new foo();

var p = false;