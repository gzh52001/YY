
/*
    nodejs的模块化开发：

        1、导出模块  ：module.exports  exports
        2、导入模块  : require()

*/

//导出模块

let person = {
    name: '老谢',
    age: 18,
    show: function () {
        console.log(this.name);
    }
}

//函数
let sum = (a, b) => {
    return a + b;
}

//导出模块：不会被覆盖，但是会把所有的方法放到一个大的对象里面
exports.person = person;
exports.sum = sum;
