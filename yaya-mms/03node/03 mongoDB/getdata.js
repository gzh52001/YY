//需求：下面图片到本地

const request = require('request');//node的第三方模块：用于发送ajax
const cheerio = require('cheerio');//类似jq的模块，第三方模块，需要安装 npm i cheerio -S
const fs = require('fs');//node的内置模块：文件读写
const path = require('path');//node的内置模块：路径操作

// 爬取这里的图片
// http://www.netbian.com/youxi/

//第一次请求：首页的body
request('http://www.netbian.com/youxi/', (err, res, body) => {
    // console.log(body);
    let $ = cheerio.load(body);
    console.log($);
    $('.list li a').each((index, ele) => {
        //ele 指的是a标签
        let url = $(ele).attr('href');//  /desk/22372.html
        console.log(url);
        if (url.startsWith('/')) {//字符串ES5新增方法 判断字符串是否以xx开头
            //我想要的是：http://www.netbian.com/desk/22372.htm 网址
            url = 'http://www.netbian.com' + url;
            //第二次请求：二级页面的body
            request(url, (err, res, body) => {
                let $ = cheerio.load(body);
                let url = $('.pic img').attr('src');
                //发送第三次请求：下载图片
                let obj = path.parse(url);
                //http://img.netbian.com/file/2019/1223/148f0cc102503b874386b873688d678e.jpg
                request(url).pipe(fs.createWriteStream('./imgs/' + obj.base));//obj.base 就是完整的文件名：aa.jpg
            });
        }
    })
})