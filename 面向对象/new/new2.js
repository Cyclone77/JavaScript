function Person() {
    console.log(this);
}

Person.prototype.add = function() {
    if (arguments) {
        var result = 0;
        Array.prototype.forEach.apply(null, arguments, function(item) {
            result += item;
        })
        return result;
    }
}

var name = new Person();
console.dir(name.add(1, 2, 4));
var p = false;