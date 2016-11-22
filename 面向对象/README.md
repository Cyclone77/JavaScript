# Object 构造函数创建一个对象包装（object wrapper）

## 语法

> // 对象初始化器（Object initialiser）或对象字面量（literal）<br />
> { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] } 
// 以构造函数形式来调用 <br />
new Object([value])

### 参数

- nameValuePair1, nameValuePair2, ... nameValuePairN <br />
成对的名称（字符串）与值（任何值），其中名称通过冒号与值分隔。
- value 任何值。

## 描述

对象构造函数为给定值创建一个对象包装器。。如果给定值是  null or undefined，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。

当以非构造函数形式被调用时，Object 等同于 new Object()。
