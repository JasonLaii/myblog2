
const express = require('express')
const router = express.Router()
const Article = require('../models/article')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//发表文章
router.post('/post',(req,res,next)=>{


  const data = req.body

  const userId = jwt.verify(data.token,'justin').uid
  // console.log(userId)
  const article = {
    author: userId,
    title: data.title,
    summary: data.summary,
    content: data.content
  }
  Article.create(article).then(article=>{

    res.json({
      success: true,
      message: "发布成功",
      articleId: article._id
    })
    
  })

})


module.exports = router