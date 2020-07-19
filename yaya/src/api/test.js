import axios from 'axios'

export default {
     //获取分类接口数据
    getapp() {
        return axios({ //返回一个promise对象
            method: 'get',
            url:'/add-api/products/category/v1?from='
        });
    },
}