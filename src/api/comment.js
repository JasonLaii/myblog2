
import axios from 'axios'

//发表评论
const uploadComment = function(comment){

  return axios.post('/api/upload-comment',comment)
}


//删除评论
const deleteComment = function(comment){

  return axios.post('/api/remove-comment',{ params: { commentId : comment}})
}

//获取某篇文章下的所有评论
const getCommentList = function(postId){
  
  return axios.get('/api/get-comment-list',{ params: { postId:postId }})
}

export {
  uploadComment,
  deleteComment,
  getCommentList
}
