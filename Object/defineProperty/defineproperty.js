const obj = {};
Object.defineProperty(obj, 'msg', {
    get() {
        console.log('get');
    },
    set(newval) {
        console.log('set', newval);
    }
})

obj.msg = 'hello world' // set hello world
obj.msg // get

function Cy(options) {
    this.data = options || {};
    this.init();
}

Cy.prototype = {
    constructor: Cy,
    init() {
        Object.keys(this.data).forEach((key) => {
            this.proxyKeys(key);
        });

    },

    proxyKeys(key) {
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get() {
                return this.data[key];
            },
            set(newVal) {
                this.data[key] = newVal;
            }
        });
    }
};

let cy1 = new Cy({
    name: "zhangsan",
    age: 20
})
console.log(cy1.name);
cy1.name = "lisi";
console.log(cy1.name);

console.log(Object.keys(cy1));