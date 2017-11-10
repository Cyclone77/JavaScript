//发布者
class Dep {
    constructor() {
        this.subs = [];
    }

    //添加订阅者
    addSub(watcher) {
        this.subs.push(watcher);
    }

    //发布通知
    notify() {
        this.subs.forEach((watcher) => {
            watcher.update();
        })
    }
}


Dep.target = null;


//订阅者
class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp; // data 属性名
        this.cb = cb; // 回调函数

        // 将自己添加到订阅器
        this.value = this.getValue();
    }

    update() {
        const value = this.vm.data[this.exp];
        const oldValue = this.value;
        if (value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue); // 执行回调函数
        }
    }

    getValue() {
        Dep.target = this; // 将自己赋值给 Dep.target
        const value = this.vm.data[this.exp]; // 取值操作触发订阅者订阅
        Dep.target = null;
        return value;
    }
}
class Observer {
    constructor(data) {
        this.data = data;
        this.walk();
    }

    walk() {
        Object.keys(this.data).forEach(key => {
            this.defineReactive(this.data, key, this.data[key]);
        });
    }

    defineReactive(data, key, value) {
        const dep = new Dep();

        if (value && typeof value === 'object') {
            new Observer(value);
        }

        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get() {
                if (Dep.target) {
                    dep.addSub(Dep.target);
                }
                return value;
            },
            set(newVal) {
                if (newVal === value) {
                    return false;
                }
                value = newVal;
                dep.notify();
            }
        });
    }
}

let app = {
    data: {
        name: "this is name",
        title: "this is title",
        count: 1
    }
}


let watcher1 = Object.assign({}, app.data);
let watcher2 = Object.assign({}, app.data);

new Observer(app);
Object.keys(app.data).forEach((key) => {
    new Watcher(app, key, (newValue, value) => {
        watcher1[key] = newValue;
        watcher2[key] = newValue;
    })
})


app.data.title = "new title";
console.log(watcher1.title);
console.log(watcher2.title);