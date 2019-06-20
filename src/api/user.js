
import axios from 'axios';

//注册
const signup = ( account,password ) =>{
  const data = {
    account,
    password
  }
  console.log("signup-function")
  console.log(data)

  return axios.post('/api/signup',data)

}

//登录
const signin = (account,password) =>{
  const data = {
    account,
    password
  };
  console.log("this is in front end api.")
  console.log(data)
  return axios.post("/api/signin", data);
}

export {
  signin,
  signup
}