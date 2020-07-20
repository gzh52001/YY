//引入express(第三方，用之前要安装 npm i express)

let express = require('express');
// 引入json解析中间件
var bodyParser = require('body-parser');
let app = express();//创建实例

// 添加json解析
app.use(bodyParser.json());//转json数据的 {"key":"value","key":"value"}
app.use(bodyParser.urlencoded({ extended: false }));//转键值对数据 key=value&key=value

//只要设置上面的两个中间件，无论你是json数据或是键值对拼接的字符串，都一律帮你转成对象形式，可以方便用 req.body;(请求：post/put/delete)

//开启静态资源服务器：静态资源：html、css、js、图片、视频音频
app.use(express.static('./'));

/*
    * 缓存：静态资源:html、css、js、视频、音频、图片(数据部分不会缓存，因为是靠ajax请求回来的)
        * 强制缓存：maxAge : 1h 客户端发送请求后，静态资源已经载入本地，在一个小时内再发送请求，是不会请求静态资源，会从缓存读取数据，不会浪费服务器资源；第一次：请求新的 200 第二次起：如果还在缓存时间内，在本地缓存读取数据。200 cache
        * 协商缓存：maxAge : 1h 第二次请求，已经超过了缓存时间,比如：a.jpg 已经请求过了，现在要请求第二次资源，服务器和你协商，你要的资源，服务器这边还未改动过，a.jpg,让你(客户端)还是去缓存读取 304.
        * 离线缓存：访问过某个网页，断网，打开，页面还在。在联网的情况下，设置一个文件，让页面的内容自动载入离线缓存里面 cache storage。离线的时候，还可以看到。小说站。
        
        api文档：https://docs.apipost.cn/view/1935bd14c09354c9#2078029
*/
// app.use(express.static('./', { index: './list.html', maxAge: 3600000 }));//以当前目录为站点根目录

/*
    中间件：
    app.use([path],中间件……)
        * 中间件就是函数，帮我们做一些数据处理
        * 三个参数
            * request 请求对象：前端发送ajax的时候，发送的相关数据
            * response 响应前端，把数据准备好，发回去给前端
            * next 下一步，不写，默认就是允许进入下一个路由
*/

//use方法意味着，前端无论什么请求方式都能进入到这个路由
// app.use('/home', (request, response, next) => {
//     response.send('响应数据home');//一个use方法里面，只能有一个send()
//     // console.log('第一个中间件');
//     next();
// });

//restful接口规范：get post put delete

//get请求：获取购物车数据列表
app.get('/cartList', (req, res) => {
    let list = [
        {
            gid: '001',
            gname: '华为',
            gprice: '7899'
        },
        {
            gid: '002',
            gname: '苹果',
            gprice: '8999'
        }
    ]
    //响应数据
    res.send(list);
});

//查询gid为2的那条商品数据:动态路由
let goods = [
    {
        gid: 1,
        gname: '华为',
        gprice: '7899'
    },
    {
        gid: 2,
        gname: '苹果',
        gprice: '8999'
    }
]
//get请求：http://localhost:2011/good/3 动态路由
app.get('/good/:id', (req, res) => {
    console.log(req.params);//{id:3}
    let gid = req.params.id;
    let goodinf = goods.filter(item => item.gid == gid);
    res.send(goodinf);
});

//get请求：查询gname叫苹果的商品:http://localhost:2011/good?gname=苹果 get传参
app.get('/good', (req, res) => {
    console.log(req.query);//{gname:'苹果'}
    let name = req.query.gname;
    let goodinf = goods.filter(item => item.gname == name);
    res.send(goodinf);
});

//post请求：注册账号
//express.urlencoded() 用于接收的数据 application/x-www-form-urlencoded : key1=val1&key2=val2
// app.post('/reg', express.urlencoded(), (req, res) => {//使用express内置的中间件，虽然可以获取到post传过来的application/x-www-form-urlencoded格式的数据，但是命令行会有一个警告
app.post('/reg', (req, res) => {
    //前端把账号和密码发过来，后端拿到，存到数据库里面
    console.log(req.body);//{name:'laoxie',psw:123456}
    //发送ajax，把数据插入到数据库里面
    let inf = {
        code: 2000,
        flag: true,
        message: '注册成功'
    }
    res.send(inf)
});

//put请求:把id为2的商品名称换成 小米

//如果用express内置的中间件，启动服务的时候，cmd命令窗口会有警告。如果不喜欢看这个黄色的警告，可以自行安装body-parser (npm i body-parser);再引入即可。完美解决这个警告的问题
// app.put('/good', express.urlencoded(), (req, res) => { 
app.put('/good', (req, res) => {
    let obj = req.body;//{name:'小米',id:2}
    // let test = req.query;
    // console.log(test);
    let goodinf = goods.filter(item => item.gid == obj.id);
    goodinf[0].gname = obj.name;
    // console.log(goodinf);
    let inf = {
        code: 2000,
        flag: true,
        message: '修改成功',
        data: goodinf
    }
    res.send(inf);
});

//delete请求:删除id为1的数据
app.delete('/good/:id', (req, res) => {
    let id = req.params.id;
    let good = goods.filter(item => item.gid != id);
    let inf = {
        code: 2000,
        flag: true,
        message: '删除成功',
        data: good
    }
    res.send(inf);
})

//前端：什么都不做，但是如果你看到后端要求是这个格式的数据：application/x-www-form-urlencoded，让后端转 https://blog.csdn.net/u014672511/article/details/80425808

// axios.post('xxx', {
//     name: 'laoxie',
//     psw: 123456
// })

app.listen(2011, () => {
    console.log('服务器开启成功:请访问http://localhost:2011');
});