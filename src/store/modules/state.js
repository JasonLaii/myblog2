const state = {
  //user
  account: "",
  password: "",
  gender: ['x','m','f'],
  nickname: "",
  avatar: "image/avatar.jpg",
  bio: "",
  
  message: {},
  //令牌
  token: '',
  
  //article
  article:{},
  articleList: [],
  articleMessage: "",
  title: "",
  summary: "",
  content: "",
  viewNum: "",
  commentNum: "",

  //comment
  comment: "",
  commentList: [],

}

export default state;