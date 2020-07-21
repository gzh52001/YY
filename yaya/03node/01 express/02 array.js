//以前对象的方法都能用，只要不用window的方法和document的方法即可
let arr = [1, 2, 3];

let str = arr.map(item => {
    return `<li>${item}</li>`
});

console.log(str);