
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

});

//get articles
router.get('/main-part',(req,res,next)=>{

  Article.find().sort({'_id':-1}).populate({path: 'author',model: 'User'}).then(function(articleList){

    res.send(articleList)
    // console.log(articleList)
  })

}),

//点击量
router.get('/update-view-num',(req,res,next)=>{

  let postId = req.params.postId;
  
  Article.updateOne({ _id: postId},{ $inc: { viewNum: 1 }}).exec();
})


module.exports = router