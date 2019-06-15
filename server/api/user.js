const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')

//注册
router.post('/signup',(req,res,next)=>{
  const { account, password } = req.body;

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

router.get('/',(req,res)=>{
  res.render("THIS IS BACKEND PAGE.")
})

module.exports = router;