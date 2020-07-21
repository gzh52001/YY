import request from '../utils/request.js';
// BASES_API = process.env.VUE_APP_BASES_API;

export default {
    loginIn(){
        return request({ //返回一个promise对象
            method: 'post',
            url: '/add-api/user/login',
            data:{
          
            }
        });
    },
    getUserInf(token){
        return request({ //返回一个promise对象
            method: 'get',
            url: '/add-api/user/info/'+token,
            
        });
    },
    reg ({ username, password }){
        return request.post('/shi-api/user/reg',{
            username,
            password
        })
    },
    checkname({username}){
        return request.get('/shi-api/user/checkname',{
            params:{
                username
            }
        })
    },
    login ({username,password}){
        return request.get('/shi-api/user/login',{
            params:{
                username,
                password
            }
        })
    },
}