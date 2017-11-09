function timeout(time) {
    let promis = new Promise((resolve, reject) => {
        setTimeout(resolve, time, "done");
    });
    return promis;
}

timeout(2000).then(value => {
    console.log("2秒后显示" + value);
});

console.log("立即执行");

var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("fail")), 3000);
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(p1), 1000);
});

p2.then(result => console.log(result)).catch(error => console.log(error));

new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(1);
    }, 5000);
    console.log(2);
}).then(r => {
    console.log(r);
});