function Person() {
    this.name = 'w3cplus';
    this.age = 7;
}
/*
Person.prototype.constructor = function Other() {
    this.name = 'damo';
    this.age = 30;
    console.log(this.age);
}
 */
var name = new Person();
console.log(name.constructor == Person.prototype.constructor);