const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require('jsonwebtoken')

//注册
router.post("/signup", (req, res, next) => {
  const { account, password } = req.body;

  User.findOne({ account: account })
    .count()
    .then(count => {
      console.log("account outside : " + account);
      if (count > 0) {
        //用户已存在
        console.log("用户已存在");
        res.json({
          success: false,
          message: "用户已存在"
        });
      } else {
        //加密
        // console.log("arrived backend.");
        // console.log("account inside:" + account);

        bcrypt.hash(password, 10, function(err, hash) {
          if (err) throw new Error(err);

          const user = {
            account: account,
            password: hash
          };

          User.create(user).then(user => {
            const userToken = {
              uid: user._id,
              account: user.account
            }
            //密钥
            const privateKey = 'justin'
            //生产token - 令牌
            const token = jwt.sign(userToken,privateKey)
            res.json({
              success: true,
              message: "注册成功！",
              token: token
            });
          });
        });
      }
    });
});

//登录
router.post("/signin", (req, res, next) => {
  const { account, password } = req.body;

  User.findOne({ account: account })
    .then(user => {
      
      try {
        if (user) {
          //输入密码与db密码对比
          const flag = bcrypt.compareSync(password, user.password );
          if (flag) {
            
            const userToken = {
              uid:  user._id,
              account: user.account
            }
            const privateKey = 'justin'
            const token = jwt.sign(userToken,privateKey)

            res.json({
              success: true,
              message: "登录成功",
              token : token
            });
          } else {
            throw new Error("密码错误！！");
          }
        }

        if (!user) {
          throw new Error("账号不存在！");
        }
      } catch (err) {
        res.json({
          success: false,
          message: err.message
        });
      }
    })
    .catch(next);
});

module.exports = router;
