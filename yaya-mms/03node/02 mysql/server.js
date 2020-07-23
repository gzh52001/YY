//引入express开启静态资源服务器
const express = require('express');
//导入路由:本质就是一个中间件
const AllRouter = require('./routers/index');
//引入配置文件
const config = require('./config.json');

const app = express();

app.use(express.static('./'));//静态资源服务器
app.use(AllRouter);//启用主路由

app.listen(config.port, () => {
    console.log('服务器已开启，请访问3099的端口');
});

