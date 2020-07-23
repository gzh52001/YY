//准备相关的工具方法，到vuex里面可以调用
const TOKEN_KEY = 'yaya-token';
const USER_KEY = 'yaya-username';


//获取token
export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

//设置token
export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

//获取username
export function getUser() {
    return localStorage.getItem(USER_KEY);
}

//设置username
export function setUser(username) {
    localStorage.setItem(USER_KEY, username);
}

//删除本地信息；退出
export function logOut() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
}