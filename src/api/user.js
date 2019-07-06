
import axios from 'axios';

//注册
const signup = ( account,password ) =>{
  const data = {
    account,
    password
  }

  return axios.post("/api/signup", data);

}

//登录
const signin = (account,password) =>{
  const data = {
    account,
    password
  };

  return axios.post("/api/signin", data);
}

export {
  signin,
  signup
}