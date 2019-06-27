

import axios from 'axios'

const uploadArticle = (article)=>{

  // console.log("font end api")
  // console.log(article)
  
  return axios.post('/api/post',article)

}

export {
  uploadArticle
}