import * as types from './type'
import { signup } from '../../api/user'

const actions = {
  [types.SIGN_UP]({ account,password }) {
    // return new Promise((resolve,reject)=>{
      signup(account,password).then((res)=>{
        const data = res.data;
        console.log(data);
      })
    // })
  }

}

export default actions