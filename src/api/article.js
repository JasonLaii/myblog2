

import axios from 'axios'

const uploadArticle = (article)=>{

  return axios.post('/api/',article)  
}

export {
  uploadArticle
}