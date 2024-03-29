
const express = require('express')
const router = express.Router()
const Article = require('../models/article')
const User = require('../models/user')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')
const marked = require('marked')
const hljs = require('highlight.js')

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code){
    return hljs.highlightAuto(code).value;
  }
})

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
    
    for(let article of articleList){
      //解析成markdown
      article.content = marked(article.content || '',{ sanitize: true })
    }
    res.send(articleList)

  })

}),

//获取某篇文章
router.get(`/post/:postId`,(req,res,next)=>{
  let postId = req.params.postId;
  
  Article.findOne({ _id: postId }).then(article=>{
    article.content = marked(article.content || '',{ sanitize: true });
    res.send(article)
  })
})

//点击量
router.get('/update-view-num',(req,res,next)=>{

  let postId = req.query.postId

  Article.updateOne({ _id: postId},{ $inc: { viewNum: 1 }}).exec();
})

//删除文章
router.get('/delete-post',(req,res,next)=>{

  let postId = req.query.postId;
  
  //删除文章
  //删除文章下的所有评论
  Promise.all([
    Comment.deleteMany({ postId: postId }),
    Article.deleteOne({ _id: postId })]).then(result=>{

      let commentList = result[0]
      let article = result[1]
      console.log('commentList')
      console.log(commentList)
      console.log('article')
      console.log(article)

      res.json({
        success: true,
        message: "删除成功"
      });
    })

})


module.exports = router