const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

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
        console.log("arrived backend.");
        console.log("account inside:" + account);

        bcrypt.hash(password, 10, function(err, hash) {
          if (err) throw new Error(err);

          const user = {
            account: account,
            password: hash
          };

          User.create(user).then(user => {
            res.json({
              success: true,
              message: "注册成功！"
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
      const flag = bcrypt.compareSync(password, user.password);

      try {
        if (user) {
          if (flag) {
            res.json({
              success: true,
              message: "登录成功"
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
