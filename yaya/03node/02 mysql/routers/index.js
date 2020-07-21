//引入express开启静态资源服务器
const express = require('express');
const router = express.Router();//router==app
// 引入json解析中间件
var bodyParser = require('body-parser');

// 添加json解析
router.use(bodyParser.json());//转json数据的 {"key":"value","key":"value"}
router.use(bodyParser.urlencoded({ extended: false }));//转键值对数据 key=value&key=value

//导入子路由
const usersRouter = require('./modules/usersRouter');//用户管理的接口
const goodsRouter = require('./modules/goodsRouter');//商品管理的接口
const uploadRouter = require('./modules/upload');//上传图片的接口

//CORS跨域：方便和小伙伴共享接口：加上这段话，再设置防火墙，别人就可以访问你的接口了(记得保证服务器开启)
//把这个路由配置放在所有路由的前面，方便调用next操作
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

//use无论是什么请求都可以进入
router.use('/user', usersRouter);//启用子路由:use里面的函数是中间件
//中间件本质上是函数，但是函数不一定是中间件 (req, res, next)
router.use('/good', goodsRouter);//启用子路由
router.use('/upload', uploadRouter);//启用子路由


//划分子路由

/*
    电商网：
        * 用户管理 usersRouter.js
            * 验证用户名是否存在
            * 注册
            * 登陆
            * 验证token
            * 修改信息
            * 删除用户
            * 删除多个用户
            * 查询用户列表(分页)
            * 查询uid为xx的用户信息
        * 商品管理 goodsRouter.js
            * 商品信息列表
            * 查询gid为xx的商品
            * 修改gid为xx的商品信息
            * 删除gid的商品
            * 删除多个商品
            * 新增商品
        * 订单管理 ordersRouter.js
            * 新增订单
            * 删除订单
            * 修改订单
            * 查询订单列表
            * 查询某个订单
*/

//导出路由
module.exports = router;

