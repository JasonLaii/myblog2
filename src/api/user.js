
import axios from 'axios';
import Vue from 'vue';

let vm = new Vue();

//注册
const signup = (account,password) =>{
  const data = {
    account,
    password
  }
  return axios.post('/auth/signup',data)

  // vm.$axios.post('/signup',data).then(()=>{
  //   console.log('send data to backend successfully.')
  // })
}

//登录
const signin = (account,password) =>{
  const data = {
    account,
    password
  };
  return axios.post("/signin", data);
}

export {
  signin,
  signup
}