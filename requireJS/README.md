## 为什么要使用requireJS？

很久之前，我们所有的JS文件写到一个js文件里面去进行加载，但是当业务越来越复杂的时候，需要分成多个JS文件进行加载，比如在页面中head内分别引入a.js，b.js，c.js等，如下所示：
``` html
<script src="js/app/a.js"></script>
<script src="js/app/b.js"></script>
<script src="js/app/c.js"></script>
```