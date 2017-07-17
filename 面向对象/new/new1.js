function Person(name, age) {
    this.name = name;
    this.age = age;
}

var w3cplus = new Person('w3cplus', 7);
console.log(w3cplus);

var alibaba = new Person('Alibaba', 18);
console.log(alibaba);

var name = new Person();
console.log(name.constructor);

var adder = new Function("a", "b", "return a + b");
console.log(adder.apply(null, [2, 3]))