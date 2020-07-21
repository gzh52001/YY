const express = require('express');
const router = express.Router();//router==app
const { host } = require('../../config.json');
const query = require('../../db/mysql');
//图片上传
var multer = require('multer') //引入插件multer用于上传文件

//设置上传文件的目录：uploads/ 绝对路径，以你的服务器为根目录创建的：无则创建
//缺点：没有后缀名，文件名被串改
// var upload = multer({ dest: 'uploads/' });

//改成这种配置方式
var storage = multer.diskStorage({
    //缺点：如果没有该目录，就上传失败
    // destination: function (req, file, cb) {
    //     cb(null, 'uploads/')
    // },
    //目录：无则创建
    destination: 'uploads/',
    filename: function (req, file, cb) {
        // console.log(file);
        //3.jpg 
        let arr = file.originalname.split('.');
        // cb(null, file.fieldname + '-' + Date.now()) //avatar-42432476
        cb(null, arr[0] + '-' + Date.now() + '.' + arr[1]) //avatar-42432476
    }
})

var upload = multer({ storage })

//上传单个文件：上传头像  /upload/touxiang
router.post('/touxiang', upload.single('avatar'), async (req, res) => {
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
    console.log(req.file);
    let { uid } = req.body;//获取formdata传过来的uid
    //http://localhost:3099/uploads/timg-1593655420158.jpg 得到这段路径，存入数据库即可
    let url = host + 'uploads/' + req.file.filename;
    //UPDATE userinf SET adr='888' WHERE uid=31
    let p = await query(`UPDATE userinf SET adr='${url}' WHERE uid=${uid}`);
    let inf = {};
    if (p.affectedRows) {
        //上传成功
        inf = {
            code: 2000,
            flag: true,
            message: '上传成功',
            data: {
                imgurl: url
            }
        };
    } else {
        inf = {
            code: 3000,
            flag: false,
            message: '上传失败'
        };
    }
    // console.log(p);
    res.send(inf);

})

//上传多个文件:商品图片 每次最多上传3张  /upload/goodsimg
router.post('/goodsimg', upload.array('goods', 3), async (req, res) => {
    // req.files 是 `goods` 文件数组的信息
    // req.body 将具有文本域数据，如果存在的话
    // console.log(req.files);
    //url1&url2&url3
    let { id } = req.body;
    let url = '';
    req.files.forEach(item => {
        url += host + item.destination + item.filename + '&';
    });

    url = url.slice(0, -1);
    // console.log(url);
    let p = await query(`UPDATE goodslist SET url='${url}' WHERE id=${id}`);
    if (p.affectedRows) {
        //上传成功
        inf = {
            code: 2000,
            flag: true,
            message: '上传成功',
            data: {
                imgurl: url
            }
        };
    } else {
        inf = {
            code: 3000,
            flag: false,
            message: '上传失败'
        };
    }
    // console.log(p);
    res.send(inf);
})


module.exports = router;//导出