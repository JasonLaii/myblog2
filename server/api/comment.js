
const express = require('express')
const router = express.Router();
const User = require('../models/user')
const Article = require('../models/article')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

//发表评论
router.post('/comment',(req,res,next)=>{
  let data = req.body;

  let author = jwt.verify(data.token,'justin').uid

  let comment = {
    author: author,
    comment: data.comment,
  }
  Comment.create


})

//删除评论
router.get('',(req,res,next)=>{
  
})

export default router