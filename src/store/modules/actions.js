import * as types from './type'
import { signup } from '../../api/user'

const actions = {
  //actions 在接收参数的时候，第一个参数为总为context
  //报错400 --一般是 代理出现问题
  [types.SIGN_UP]( context,data ) {
    console.log("this is in store-action")
    console.log(data)

    signup(data.account,data.password);


  }

}

export default actions