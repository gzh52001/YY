import axios from 'axios'

export default {
     //获取分类接口数据
    getapp() {
        return axios({ //返回一个promise对象
            method: 'get',
            url:'/add-api/products/category/v1?from='
        });
    },
    //模糊查询
    searchForm(id) {
        return axios({ //返回一个promise对象
            method: 'get',
            url:`/add-api/search/recommendSearch/v1?keyword=${id}&searchType=1&count=10`
        });
    },
    searchPlaceholder(){
        return axios({ //返回一个promise对象
            method: 'get',
            url:"/add-api/user/userInfo/v1"
        });
    },
    getlist(id){
        return axios({ //返回一个promise对象
            method: 'get',
            url:"/add-api/products/search/v1?coll="+id+"&keyword=&productId=&page=1&inStock=0&searchType=1&isPID=1&from=&hspid=&brandId="
        });
    }


}
