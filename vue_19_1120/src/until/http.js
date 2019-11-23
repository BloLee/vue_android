import axios from "axios"; 
import { Toast } from "@nutui/nutui";
// axios = axios.create({
//   baseURL: '/api', 
// });
axios.baseURL='/v2';
let loading = "";
var _num = 0;
//发起请求之前 拦截
axios.interceptors.request.use( (config) => {  
    loading = Toast.loading("加载中");
    _num ++; 
    //请求发送之前
    // console.log(config);
    return config;
  },(error) => { 
    // _num--;
    // if(_num <= 0 ){
    //   loading.hide();
    // }
    //处理错误请求
    return Promise.reject(error);
  }
)
//添加响应拦截器
axios.interceptors.response.use( 
  response => {
    _num --;
    if(_num <= 0 ){
      loading.hide();
    }
    // 对响应数据做点什么 
    if( response.status === 200 ){ 
      return response;
    }
    
}, function (error) {
  // _num --;
  // if(_num <= 0 ){
  //   loading.hide();
  // }
  // 对响应错误做点什么
  return Promise.reject(error);
});

export function get(url,params) {
  return new Promise((resolve,reject) => {
    axios.get(url,{params:params})
    .then( res => {
      resolve(res.data)
    })
    .catch( (err) => {
      reject(err)
    })
  })
}
export function post(url,params) {
  return new Promise((resolve,reject) => {
    axios.post(url,params)
    .then( res => {
      resolve(res.data)
    })
    .catch( (err) => {
      reject(err)
    })
  })
}

