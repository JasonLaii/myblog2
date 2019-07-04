
import axios from 'axios'

//发表评论
const uploadComment = function(comment){

  return axios.post('/api/comment',comment)
}


//删除评论
const deleteComment = function(comment){
  return axios.post('api/',comment)
}

export {
  uploadComment,
  deleteComment
}
