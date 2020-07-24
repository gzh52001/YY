import axios from 'axios'

export default {
     //获取分类接口数据
    getapp() {
        return axios({ //返回一个promise对象
            method: 'get',
            url:'/add-api/products/category/v1?from='
        });
    },
    // 获取购物车热卖商品
    getHotSale() {
        return axios({
            method: 'get',
            url: '/add-api/tmpBasket/list/v3'
        })
    },
    //模糊查询
    searchForm(id) {
        return axios({ //返回一个promise对象
            method: 'get',
            url:`/add-api/search/recommendSearch/v1?keyword=${id}&searchType=1&count=10`
        });
    },

    //模糊搜索商品数据
    searchList(id) {
        return axios({ //返回一个promise对象
            method: 'get',
            url:`/add-api/products/search/v1?coll=0-0-0-0-0_0&productId=${id}&page=1&inStock=0&searchType=1&isPID=1&from=&hspid=&brandId=`
        });
    },
    searchPlaceholder(){
        return axios({ //返回一个promise对象
            method: 'get',
            url:"/add-api/user/userInfo/v1"
        });
    },
    //分类列表数据
    getlist(id){
        return axios({ //返回一个promise对象
            method: 'get',
            url:"/add-api/products/search/v1?coll="+id+"&keyword=&productId=&page=1&inStock=0&searchType=1&isPID=1&from=&hspid=&brandId="
        });
    },
    //我的页面接口数据
    getmine() {
        return axios({ //返回一个promise对象
            method: 'get',
            url:'/add-api/member/index/v3?v=0.32552813180810625&from='
        });
    },
    //详情页数据接口
    getDetails(id){
        return axios({ //返回一个promise对象
            method: 'get',
            url:'/add-api/sc/products/getDetailStatic/v3?ppid='+id
        });
    },

    //首页
    getHomePage(id){
        return axios({ //返回一个promise对象
            method: 'get',
            url:`/add-api/floors/v1?label=${id}&page=1&random=0&from=`
        });
    }

}
    
