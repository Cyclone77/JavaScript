# defineProperty 为对象定义或修改一个属性

## 属性类型

### 1.数据属性

数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有 4 个描述其行为的特性。

- [[Configurable]]: 是否可以删除属性，默认为false。
- [[Enumerable]]: 是否可以通过for-in循环返回属性，默认为false。
- [[Writable]]:是否可以修改属性，默认为false。
- [[Value]]: 属性值。

> 以上属性在非严格模式下什么也不会变化，在严格模式下，一旦属性改为false，再次调用会抛出异常。

### 2.访问器属性

访问器属性不包含数据值；访问器属性有如下 4 个特性。

- [[Configurable]]：同上
- [[Enumerable]]：同上
- [[Get]]：在读取属性时调用的函数。默认值为 undefined。
- [[Set]]：在写入属性时调用的函数。默认值为 undefined。

> 访问器属性不能直接定义，必须使用 Object.defineProperty()来定义。


**其中value和writable一组，get和set一组，不可同时出现。**

- get和set方法内部的this都指向obj，这意味着get和set函数可以操作对象内部的值。另外，访问器属性的会"覆盖"同名的普通属性，因为访问器属性会被优先访问，与其同名的普通属性则会被忽略。 **数据属性和访问器属性不能混用！**
