

import axios from 'axios'

const uploadArticle = (article)=>{

  // console.log("font end api")
  // console.log(article)
  
  return axios.post('/api/post',article)

}

const getArticleList = ()=>{
  
  return axios.get('/api/main-part')
}

//更新点击量
const updateViewNum = (postId)=>{
  return axios.get('/api/update-view-num',{
    params:{ postId: postId }
  })
}

//删除文章
const deletePost = (postId)=>{

  return axios.get('/api/delete-post',{ params: { postId: postId }})
}

export {
  uploadArticle,
  getArticleList,
  updateViewNum,
  deletePost
}