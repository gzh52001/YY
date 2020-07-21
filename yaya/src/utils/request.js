//对axios进行二次封装
import axios from 'axios/dist/axios' //引入axios
// import { extend } from 'vue/types/umd';

const request =axios.create({
    baseURL:'/',///api
    timeout:3000,//3秒：请求超时时间，如果3秒还没有拿到数据就断开
})
 //baseURL:'/api',
// axios.get('/user') // /user==/api/user


export default request