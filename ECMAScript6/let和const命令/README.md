# let和const命令

## let 命令

ES6新增了*let*命令，用来声明变量。它的用法类似于*var*，但是所声明的变量，只在*let*命令所在的代码块内有效。

### 不存在变量的提升

*var* 命令会发生变量的提神，即变量可以在声明之前使用，值为undefined。
*let* 则一定要申明后才能使用，否则会报错。

### 暂时性死区 

只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

``` javascript
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
let命令声明变量tmp之前，都属于变量tmp的“死区”。
“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。

``` javascript
typeof x; // ReferenceError
let x;
```

上面代码中，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。

作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。

``` javascript
typeof undeclared_variable // "undefined"
```
### 不允许重复申明
let不允许在相同作用域内，重复声明同一个变量。

## 块级作用域

为什么需要块级作用域？

``` javascript
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```

