import * as types from "./type";
import { signup, signin } from "../../api/user";
import swal from "sweetalert";
import { uploadArticle, getArticleList, updateViewNum, deletePost,getPostById } from "../../api/article";
import { uploadComment, deleteComment, getCommentList } from '../../api/comment'
import { eventBus } from '../../eventBus'


const actions = {
  //actions 在接收参数的时候，第一个参数为总为context
  //报错400 --一般是 代理出现问题

  //注册
  [types.SIGN_UP](context, data) {
    return new Promise((resolve, reject) => {
    signup(data.account, data.password).then(res => {
      const data = res.data;
      //注册成功
      if (data.success) {
        // context.commit("SET_MESSAGE",data);
        localStorage.setItem("user-token", data.token);
        sessionStorage.setItem("user_id",data._id)
        context.commit("SET_MESSAGE", data);
        context.commit("TOKEN", data.token);

        eventBus.$emit("setItem")

        swal({
          // title: 'SUCCESS!',
          text: data.message,
          icon: "success",
          button: "Yohooo.."
        })
        // .then(() => {
          // location.href = "http://localhost:8080/main-part";
        // });
        resolve();
      } else {
        //注册失败
        swal({
          // title: 'ERROR',
          text: data.message,
          icon: "error",
          button: "RETRY!"
        }).then(() => {
          history.go(0);
        });
      }
    });
    });
  },

  //登录
  [types.SIGN_IN](context, data) {
    return new Promise((resolve, reject) => {
    signin(data.account, data.password).then(res => {
      const data = res.data;
      //登录成功
      if (data.success) {

        context.commit("SET_MESSAGE", data);
        localStorage.setItem("user-token", data.token);
        sessionStorage.setItem("user_id",data._id)
        context.commit("TOKEN", data);

        eventBus.$emit("setItem");
        swal({
          text: data.message,
          icon: "success",
          button: "Yohoo.."
        })
        // .then(() => {
          // location.href = "http://localhost:8080/main-part";
        // });
        resolve();  
      } else {
        //登录失败

        swal({
          text: data.message,
          icon: "error",
          button: "Retry."
        }).then(() => {
          location.reload();

          // history.go(0)
        });
      }
    });
    });
  },

  //发布文章
  [types.UPLOAD_ARTICLE](context, article) {
    // return new Promise((resolve, reject) => {

    uploadArticle(article).then(res => {

      // console.log(res.data)
      //文章发布成功
      if (res.data.success) {
        context.commit("GET_ARTICLE_MESSAGE", res.data);
        console.log("in action page...")
        console.log(res.data)
        swal({
          text: res.data.message,
          icon: "success",
          button: "Yohoo..."
        }).then(() => {
          location.href = "http://localhost:8080/main-part";
        });
        // resolve();
        //文章发布失败
      } else {
        swal({
          text: res.data.message,
          icon: "error",
          button: "Retry..."
        });
      }
    });

    // });
  },

  //获取所有文章
  [types.GET_ARTICLE_LIST](context) {
    return new Promise((resolve, reject) => {
      
      getArticleList().then(res => {

        context.commit("GET_ARTICLE_LIST", res.data);
        resolve();
      });
    });
  },

  //获取某篇文章
  GET_POST_BY_ID(context,postId){
    
    return new Promise((resolve,reject)=>{

      getPostById(postId).then((res)=>{
        context.commit("ARTICLE",res.data)

        resolve();
      })
    })
  },

  //更新点击量
  UPDATE_VIEW_NUM(context){

    let postId = context.getters.article._id
    updateViewNum(postId)
    
  },

  //更新文章
  UPDATE_ARTICLE(context){

  },
  //删除文章
  DELETE_ARTICLE(context,postId){

    deletePost(postId).then(res=>{
        
        if(res.data.success){
          context.commit("GET_ARTICLE_MESSAGE",res.data)
          swal({
            text: res.data.message,
            icon: 'success',
            button: 'cooool..'
          }).then(()=>{
            location.href = 'http://localhost:8080/main-part'
          })

        }else{
          swal({
            text: res.data.message,
            icon: 'error',
            button: 'Retry..'
          })
        }


    })
  },

  //comment
  //发表评论
  UPLOAD_COMMENT(context,data){
    
    uploadComment(data).then(res=>{

      if(res.data.success){
        
        swal({
          text: res.data.message,
          icon: 'success',
          button: 'cool..'
        }).then(()=>{
          //跳转到文章详情页
          location.href = `http://localhost:8080/posts/${data.postId}`
        })
      }else{

        swal({
          text: res.data.message,
          icon: 'error',
          button: 'retry...'
        })
      }
    })

  },
  //删除评论
  DELETE_COMMENT(context){

    // deleteComment()
  },


  //获取一篇文章下的所有评论
  GET_COMMENT_LIST(context,postId){

    return new Promise((resolve,reject)=>{

      getCommentList(postId).then(res=>{
        context.commit("GET_COMMENT_LIST",res.data)
        resolve();
      })
    })
  }

};

export default actions;
