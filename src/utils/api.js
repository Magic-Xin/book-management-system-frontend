import axios from 'axios'
import {Message} from 'element-ui';
import router from'../router'
axios.interceptors.rsponse.use(success=>{
  //业务逻辑错误
  if(success.status && success.status ==200){
    if(success.data.code==500||success.data.code==401||success.data.code==403){
      Message.error({message:success.data.message});
      return;
    }
    if(success.data.message){
      Message.success({message:success.data.message});
    }
  }
  return success.data;
},error =>{
  if(error.response.code==504||error.response.cide==404){
    Message.error({message:'接口无法访问'});
  }
  else if(error.response.code==403){
    Message.error({message:'权限不足'})
  }
  else if(error.response.code==401){
    Message.error({message:'未登录'})
    router.replace('/Login'); }
  else {
    if (error.response.data.message){
      Message.error({message:error.response.data.message});
    }
    else{
      Message.error({message:'unknown'})
    }
  }
  return;
});

//传送json格式的post请求
export const postRequest= (url,params)=>{
  return axios({
    method:'post',
    url:'${url}',
    data: params
  })
}
