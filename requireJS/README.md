[转载](http://www.cnblogs.com/tugenhua0707/p/4067220.html)
# 为什么要使用requireJS？

很久之前，我们所有的JS文件写到一个js文件里面去进行加载，但是当业务越来越复杂的时候，需要分成多个JS文件进行加载，比如在页面中head内分别引入a.js，b.js，c.js等，如下所示：

``` html
<script src="js/app/a.js"></script>
<script src="js/app/b.js"></script>
<script src="js/app/c.js"></script>
```
我们现在先在浏览器下看看这些请求，如下所示：

![loadscript](https://user-images.githubusercontent.com/10395760/28825603-7f7dd722-76f9-11e7-88ce-5e7b87bcfa39.png)

这样的写法有如下缺点：
1. 页面在加载的时候，是从页面自上往下加载及渲染的，当页面上有多个分散的js文件时候，页面会先加载及解析头部的JS文件(同步加载)，页面被堵塞了，其次分散的js请求数多了，网页失去响应的时间就会变长。
2. 由于JS文件存在依赖关系，比如上面的b.js要依赖于a.js,所以务必保证a.js优先引入到页面上来且先加载，要严格保证加载顺序，依赖性最大的文件一定要放到最后加载。但是当依赖关系很复杂的时候，代码的编写和维护就会变得困难了。

当然上面引入JS时候，对于第1点：首先：我们可以放在底部去加载，把所有JS放在</body>之前去，这样就会解决了游览器堵塞的问题，其次我们可以把所有的JS文件打包成一个JS文件，但是依赖性(也就是顺序)我们还是没有办法解决掉，所以我们引入了requireJS。

# 使用requireJS的优点有哪些？

- 实现JS文件的异步加载，避免网页被堵塞。
- 管理模块之间的依赖性，便于代码的编写和维护。

## requireJS基本语法及使用.

### 首先我们需要到官网下载最新版本的[requireJS](http://www.requirejs.org/)源码包.

在页面头部head标签内引入requireJS，如下：<script src="js/require.js"></script>，但是加载这个文件也会造成网页失去响应，我们可以加上 defer 和 async这个属性。如下：
``` html
<script src="js/require.js" defer="defer" async ></script>
```
async属性表明文件需要异步加载，IE不支持这个属性，只支持defer，所以上面把这2个属性都加上。接下来，看看requireJS启动加载脚本的初始化方式，requireJS支持属性 data-main 这个属性来加载初始化的JS文件，如下：
``` html
<script src="js/require.js" defer="defer" async data-main="js/app.js"></script>
``` 
上面的意思是：先异步加载requireJS文件，完成后继续异步加载app.js文件，我们可以看看加载顺序如下：
![load1](https://user-images.githubusercontent.com/10395760/28825990-ee79eac0-76fa-11e7-92b5-0dd80d8cdb22.png)
上面的app.js后的.js可以去掉，因为requireJS源码已经默认都是以后缀JS文件结尾的。

### 如何定义模块文件？
> RequireJS编写模块不同于其他脚本文件，它良好的使用define来定义一个作用域避免全局空间污染，它可以显示出其依赖关系，并以函数(定义此模块的那个函数)参数的形式将这些依赖进行注入。

下面我们来看下demo，如下新建一个项目文件：
![tree](https://user-images.githubusercontent.com/10395760/28828024-0a207b16-7702-11e7-97bb-6c6ec57b5175.png)
我们先在app/b.js下添加基本的requireJS代码如下：
``` javascript
define(function() {
    function add(a, b) {
        return a + b;
    }
    return {
        add: add
    }
});
```
使用define来定义模块，下面我们需要在app.js里面来加载b.js模块，如下在app.js里面来调用了。
``` javascript
require(['app/b'], function(b) {
    console.log(b.add(1, 3));
})
```
我们接着看看文件加载的情况如下：
![load2](https://user-images.githubusercontent.com/10395760/28828132-6325ba6e-7702-11e7-9c45-62412cd005bc.png)
在head标签内动态生成文件，如下：
![load2head](https://user-images.githubusercontent.com/10395760/28828240-a8f7ecf6-7702-11e7-928c-bfeac14eec89.png)
可以看到加载顺序 requirejs --> app.js --> b.js。
上面的是函数式的定义如上面方式编写代码(使用define定义一个函数)，我们还可以编写简单的键值对，直接返回一个对象(可以解决全局变量的理念)，我们现在在a.js里面返回这么一个对象，如下：
``` javascript
//a.js
define(function() {
    return {
        color: "black",
        size: "unisize"
    }
})
```
在app.js初始化代码如下：
``` javascript
require(['app/a'], function(a) {
    console.log(a);
})
```
我们在控制台上可以看到如下:
![console1](https://user-images.githubusercontent.com/10395760/28830987-f8ae53d6-770a-11e7-9b0d-daf79c2b7202.png)
 直接返回一个对象，通过使用上面的方法我们可以想到可以解决全局变量概念，比如全局变量全部使用define函数包围，什么时候需要全局变量的话，直接`require([‘XX’],function(XX){})`这样调用下，同时所有的JS都是异步的，并不会堵塞加载。
