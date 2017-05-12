var namespace = (function() {
    //缓存所有模块
    var cache = {};

    function createModule(name /*模块名*/ , deps /*依赖列表*/ , definition /*定义*/ ) {
        //如果只有模块名，则直接输出
        if (arguments.length === 1) {
            return cache[name];
        }
        //取得所有模块的依赖
        deps = deps.map(function(depName) {
            return depName;
        })
        //初始化模块并返回
        cache[name] = definition.apply(null, deps);

        return cache[name];
    }
    return createModule;
})();
