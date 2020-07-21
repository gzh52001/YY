
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

//module.exports只能写一个，如果出现多个，会被覆盖
// module.exports = person;//暴露模块，暴露接口
// module.exports = sum;

module.exports = {
    person,
    sum
}