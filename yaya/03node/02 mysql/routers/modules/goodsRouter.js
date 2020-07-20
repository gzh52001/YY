const express = require('express');
//引入mysql方法，做数据库的查询
const query = require('../../db/mysql');
const { verify } = require('jsonwebtoken');
const router = express.Router();//router==app


/*
    * 商品管理 goodsRouter.js
            * 商品信息列表
            * 查询gid为xx的商品
            * 修改gid为xx的商品信息
            * 删除gid的商品
            * 删除多个商品
            * 新增商品
            * 
    * 三个表
        * 商品信息表：存商品信息 包含商铺信息;爬虫准备的数据
        * 用户信息表：注册
        * 订单表:加入购物车
        
        多商铺购物车数据
        [
            {
                sid: 1,
                sname:'茶叶阁',
                goods: [
                    {
                        gid:1,
                        gname:'红茶'
                    },{
                        gid:2,
                        gname:'绿茶'
                    }
                ]
            },
            {
                sid: 2,
                sname:'柳螺香',
                goods: [
                    {
                        gid:1,
                        gname:'螺蛳粉'
                    },{
                        gid:2,
                        gname:'桂林米粉'
                    }
                ]
            }
        ]
        
*/

//需求：查询多商铺购物车数据
router.get('/orders/:uid', async (req, res) => {
    let uid = req.params.uid;
    try {
        //DISTINCT 去除重复项
        let sql = `SELECT DISTINCT sid FROM inf_cart WHERE uid=${uid}`;
        let sidarr = await query(sql);//[{sid:1},{sid:2}]
        // console.log(sidarr);
        let datalist = [];
        if (sidarr.length) {
            //查到数据，证明该用户曾购买过商品,按商铺归类做数据
            for (let i = 0; i < sidarr.length; i++) {
                // console.log(sidarr[i].sid + '次');
                var str2 = `SELECT * FROM inf_cart WHERE sid=${sidarr[i].sid} AND uid=1`;//查找某个用户在某个商店下买点所有商品
                var data2 = await query(str2);
                data2.forEach(item => {
                    item.ischecked = false;
                });
                var obj = {
                    sid: sidarr[i].sid,
                    ischecked: false,
                    goodslist: data2
                }

                datalist.push(obj);//obj是一个店铺的信息
            }

            res.send(datalist);
        }

    } catch (err) {
        console.log(err);
    }

});



module.exports = router;