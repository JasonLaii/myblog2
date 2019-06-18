
import axios from 'axios';
import Vue from 'vue';

let vm = new Vue();

let instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

//注册
const signup = ({ account,password }) =>{
  const data = {
    account,
    password
  }
  console.log("signup-function")
  console.log(data)

  // let instance = axios.create({
  //   headers: {'content-type': 'applicatioin/x-www-form-urlencoded'}
  // });

  // return instance.post('api/signup',data).then(res=>{
  //   res.data
  // })

  instance.post('/api/signup',data)
  .then(res=>{
    console.log("response")
    console.log(res)
  }).catch(err=>{
    console.log("data")
    console.log(data)
    console.log("error")
    console.log(err)
    console.log(err.config)
  })

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