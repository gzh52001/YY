//导入模块

let fn = require('./03 exports');

console.log(fn);

// fn.show();//调用对象里面的方法

// let num = fn(3, 6);
// console.log('和是：' + num);

fn.person.show();

let s = fn.sum(4, 9);
console.log('和是：' + s);