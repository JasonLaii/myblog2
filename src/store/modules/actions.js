import * as types from './type'
import { signup, signin } from '../../api/user'
import swal from 'sweetalert'

const actions = {
  //actions 在接收参数的时候，第一个参数为总为context
  //报错400 --一般是 代理出现问题
  [types.SIGN_UP]( context,data ) {
    console.log("this is in store-action")
    console.log(data)

    signup(data.account,data.password).then( res=>{
      
      const data = res.data
      context.commit("SET_MESSAGE",data)
      if(data.success){
        swal({
          title: 'SUCCESS!',
          text: data.message,
          icon: "success",
          button: 'Yohooo..'
        }).then(()=>{
          location.href = 'http://localhost:8080/index'
        })
      }else{
        swal({
          title: 'ERROR',
          text: data.message,
          icon: "error",
          button: 'RETRY!'
        }).then(()=>{
          
          history.go(0);
        })
      }

    })


  },

  //登录
  [types.SIGN_IN](context,data){
    console.log("Signin ..")
    console.log(data)

    signin(data.account,data.password).then(res=>{

      const data = res.data;
      if(data.success){
        swal({
          // title: 'success'
          text: data.message,
          icon: 'success',
          button: 'Yohoo..'
        }).then(()=>{
          location.href = 'http://localhost:8080/index'
        })
      }else{
        swal({
          text: data.message,
          icon: "error",
          button: 'Retry.'
        }).then(()=>{
          
          location.reload();

          // history.go(0)
        })
      }
    })
  }

}

export default actions