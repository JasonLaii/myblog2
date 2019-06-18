const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')

//注册
router.post('/signup',(req,res,next)=>{
  
  const { account, password } = req.body;

  User.findOne({ account: account }).count().then((count)=>{

    console.log("account outside : " + account)
    if(count>0){
      //用户已存在
      console.log("用户已存在");
    }else{
      //加密
      console.log('arrived backend.')
      console.log("account inside:" + account)
      bcrypt.hash(password,10,function(err,hash){
        if(err) throw new Error(err)

        const user = {
          account: account,
          password: hash
        }
        // console.log("Create account: " + account)
        // console.log("HASH-PASSWORD: "+ hash)
        
        User.create(user)
        
      })
    }
  })

})


module.exports = router;