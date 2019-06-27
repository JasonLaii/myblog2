

import axios from 'axios'

const uploadArticle = (article)=>{

  // console.log("font end api")
  // console.log(article)
  
  return axios.post('/api/post',article)

}

const getArticleList = ()=>{
  
  return axios.get('/api/main-part')
}

export {
  uploadArticle,
  getArticleList
}