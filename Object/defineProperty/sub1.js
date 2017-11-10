class Dep {
    constructor() {
        this.subs = [];
    }

    addSub(watcher) {
        this.subs.push(watcher);
    }

    notify() {
        this.subs.forEach(watcher => {
            watcher.update();
        });
    }
}

class Watcher {
    constructor() {}

    update() {
        // 接收通知后的处理方法
    }
}

const dep = new Dep(); // 发布者 dep
const watcher1 = new Watcher(); // 订阅者1 watcher1
const watcher2 = new Watcher(); // 订阅者2 watcher2
dep.addSub(watcher1); // watcher1 订阅 dep
dep.addSub(watcher2); // watcher2 订阅 dep
dep.notify(); // dep 发送通知