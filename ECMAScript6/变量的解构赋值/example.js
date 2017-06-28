let [a, b, c] = [1, 2, 3];

let [, , third] = ["foo", "bar", "baz"];

let [x, , y] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3, 4];

//let [foo] = [];
//let [bar, foo] = [1];
{
    let [x, y, z] = new Set(['a', 'b', 'c']);

    function* fibs() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    //let [first, second, third, fourth, fifth, sixth] = fibs();

    var p = false;
}

var p = false;