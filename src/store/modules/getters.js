
const getters = {
  //user
  account(state){
    return state.account
  },
  password(state){
    return state.password
  },
  gender(state){
    return state.gender
  },
  nickname(state){
    return state.nickname
  },
  avatar(state){
    return state.avatar
  },
  bio(state){
    return state.bio
  },
  signin(state){
    return state.signin
  },
  token(state){
    return state.token
  },
  message(state){
    return state.message
  },

  //article
  title(state){
    return state.title
  },
  summary(state){
    return state.summary
  },
  content(state){
    return state.content
  },
  viewNum(state){
    return state.viewNum
  },
  articleList(state){
    return state.articleList
  },
  article(state){
    return state.article
  },
  articleMessage(state){
    return state.articleMessage
  },

  //comment
  commentNum(state){
    return state.commentNum
  },
  commentList(state){
    return state.commentList
  },
  comment(state){
    return state.comment
  }
}

export default getters