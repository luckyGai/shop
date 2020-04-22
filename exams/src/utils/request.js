//1. 导入axios
import axios from 'axios';

//2. 新建一个axios实例对象
const Server = axios.create({
    baseURL: "",
    timeout: 3000
});


//3. 定义一个请求的拦截器
Server.interceptors.request.use(function (config) {
    //获取公共参数token

    return config;
}, function (error) {
    return Promise.reject(error);
})


//4. 定义一个响应拦截器
Server.interceptors.response.use(function (response) {
    //console.log(response);
    //把返回的数据做一些简单处理，然后在返回到组件中
    if (response.status == 200) {
        return response.data;
    }
    // return response;
}, function (error) {
    return Promise.reject(error);
}
)

//抛出实例化对象
export default Server;