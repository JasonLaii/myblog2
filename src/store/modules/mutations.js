
import * as type from './type';

const mutations = {
  //user
  [type.USER_ACCOUNT](state,{ account }){
    state.account = account
  },
  [type.USER_PASSWORD](state, { password }){
    state.password = password
  },
  [type.USER_NICKNAME](state, { nickname }){
    state.nickname = nickname
  },
  [type.USER_AVATAR](state, { avatar }){
    state.avatar = avatar
  },
  [type.USER_BIO](state, { bio }){
    state.bio = bio
  },
  [type.SET_MESSAGE](state,message){
    state.message = message
  },
  [type.TOKEN]( state, { token }){
    state.token = token
  },

  //article
  [type.ARTICLE_TITLE](state,{ title }){
    state.title = title
  },
  [type.ARTICLE_SUMMARY](state, { summary }){
    state.summary = summary
  },
  [type.ARTICLE_CONTENT](state,{ content }){
    state.content = content
  },
  [type.ARTICLE_VIEWNUM](state, { viewnum }){
    state.viewnum = viewnum
  },
  [type.ARTICLE_COMMENTNUM](state, { commentnum }){
    state.commentnum = commentnum
  },
  
  [type.ARTICLE](state, article){
    state.article = article
  },
  [type.GET_ARTICLE_LIST](state, articleList){
    state.articleList = articleList
  },
  

  //comment
  [type.COMMENT_COMMENT](state, { comment }){
    state.comment = comment
  }
}


export default mutations