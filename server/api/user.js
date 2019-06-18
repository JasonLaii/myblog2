const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')

//注册
router.post('/signup',(req,res,next)=>{
  console.log("req.body")
  console.log(req.body)
  
  console.log("req.params")
  console.log(req.params)
  
  
  const { account, password } = req.body;
  console.log("account: " + account + "   password: " + password)
  User.findOne({ account: account },(err,account)=>{
    if(err) throw new Error(err)


    if(account){
      //用户已存在
      console.log("用户已存在");
    }else{
      //加密
      console.log('arrived backend.')
      bcrypt.hash(password,10,function(err,hash){
        if(err) throw new Error(err)

        const user = {
          account: account,
          password: hash
        }
        User.create(user).then((err,user)=>{
          if(err) throw new Error(err)
        })
        
      })
    }
  })

})


module.exports = router;