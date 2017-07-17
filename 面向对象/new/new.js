function Person() {
    this.name = 'zhangsan';
    this.age = 7;
    console.log("这个函数已经执行了");
    return {
        "text": "原本this的内容就不会返回"
    };
}
var obj = new Person();

var p = false;