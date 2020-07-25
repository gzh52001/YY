import request from '../utils/request.js';
class User{ 
   List () { 
        let url = '/shi-api/user/admin'
        return request.get(url)
    }
    add({username,password}){
        let url = '/shi-api/user/adds'
        return request.post(url,{username,password})
    }
    del(id){
        console.log(id);
        let url = '/shi-api/user/dels'
        return request.delete(url,{data:{id}})
    }
}
export default new User()