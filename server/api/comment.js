const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Article = require("../models/article");
const Comment = require("../models/comment");
const jwt = require("jsonwebtoken");
const moment = require('moment')

//获取文章的所有评论
const getComments = function(postId) {
  return Comment.find({ postId: postId })
    .sort({ _id: -1 })
    .populate({ path: "author", model: "User" })
    .exec();
};

const getCommentByCommentId = function(commentId){
  return Comment.find({ _id: commentId })
}

//发表评论
router.post("/upload-comment", (req, res, next) => {
  let data = req.body;

  let author = jwt.verify(data.token, "justin").uid;
  let comment = {
    author: author,
    postId: data.postId,
    comment: data.comment
  };

  Comment.create(comment).then(comment => {

    //文章中的留言数加一
    Article.updateOne({ _id: comment.postId },{ $inc: { commentNum: 1 }}).exec();

    res.json({
      success: true,
      message: "留言成功"
    });
  });
});

//删除评论
router.get("/remove-comment", (req, res, next) => {

  let commentId = req.query.commentId

  Comment.deleteOne({ _id: commentId }).then(()=>{

    res.json({
      success: true,
      message: '删除成功！'
    })
    
  })

});

//获取某篇文章下的所有评论
router.get("/get-comment-list", (req, res, next) => {
  let postId = req.query.postId;
  getComments(postId).then(commentList => {
    for (let comment of commentList) {

      // let year = comment.created_at.getFullYear();
      // let month = comment.created_at.getMonth()+1;
      // let day = comment.created_at.getDate();
      // let hour = comment.created_at.getHours();
      // let min = comment.created_at.getMinutes();

      // let format_created_at = year + "-" + month + "-" + day + "-" + hour + "-" + min;

      // comment.created_at = moment(comment.created_at).format("YYYY-MM-DD HH:mm")

      // console.log(moment(comment.created_at).format("YYYY-MM-DD HH:mm"));
      // console.log(moment(comment.created_at))
      // console.log(comment.created_at);
      // comment.updated_at = comment.updated_at

    }
    res.send(commentList);
  });
});

//通过commentId 查找author
router.get('',(req,res,next)=>{
  
  let commentId = req.query.commentId
  getCommentByCommentId(commentId).then(comment=>{

    
  })

})


module.exports = router;
