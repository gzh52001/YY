import request from '../utils/request.js';
class User{ 
   List () { 
        let url = '/shi-api/user/user'
        return request.get(url)
    }
    add({username,password}){
        let url = '/shi-api/user/add'
        return request.post(url,{username,password})
    }
    del(id){
        console.log(id);
        let url = '/shi-api/user/del'
        return request.delete(url,{data:{id}})
    }
}
export default new User()