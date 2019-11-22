import axios from "axios"; 
import { Toast } from "@nutui/nutui";
// axios = axios.create({
//   baseURL: '/api', 
// });
axios.baseURL='/v2';
const loading = Toast.loading(12312312312);
//发起请求之前 拦截
axios.interceptors.request.use( (config) => {
    loading;
    //请求发送之前
    // console.log(config);
    return config;
  },(error) => {
    //处理错误请求
    return Promise.reject(error);
  }
)
//添加响应拦截器
axios.interceptors.response.use( 
  response => {
    // 对响应数据做点什么
    // window.console.log(response); 
    if( response.status === 200 ){
      loading.hide();
      return response;
    }
    
}, function (error) {
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

