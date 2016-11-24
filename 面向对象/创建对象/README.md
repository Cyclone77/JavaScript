- 工厂模式

> 依赖一个对象的 constructor 属性并不安全, 对于原始值（如1，true 或 "test"），该属性为只读。

- 构造函数模式

- 原型模式

> 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个 prototype
属性，这个属性指向函数的原型对象。在默认情况下，所有原型对象都会自动获得一个 constructor
（构造函数）属性，这个属性包含一个指向 prototype 属性所在函数的指针。

``` javascript

function Person(){}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    alert(this.name);
};

```
>就拿前面的例子来说，
Person.prototype. constructor 指向 Person。而通过这个构造函数，我们还可继续为原型对象
添加其他属性和方法。

<p align="center">
  <img alt="原型指针" src="prototype.png">
</p>
