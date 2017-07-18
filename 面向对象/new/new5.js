function Foo() {
    this.bar = 'foo bar';
}
Foo.prototype.b = 'foo bar b'; // 给Foo.prototype属性赋值
/** 在内存创建了一个新的JSON对象
 *{
 *  bar: 'foo bar',
 *  __proto__: {
 *    constructor: {name: 'Foo', ...},
 *    __proto__
 *  }
 *}
 **/
var foo = new Foo();
debugger
console.log(JSON.stringify(foo)); // 输出: {"bar":"foo bar"}

// 输出: bar foo bar
for (var propName in foo) {
    propValue = foo[propName]
    console.log(propName, propValue);
}