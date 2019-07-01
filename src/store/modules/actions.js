import * as types from "./type";
import { signup, signin } from "../../api/user";
import swal from "sweetalert";
import { uploadArticle, getArticleList, updateViewNum } from "../../api/article";

const actions = {
  //actions 在接收参数的时候，第一个参数为总为context
  //报错400 --一般是 代理出现问题

  //注册
  [types.SIGN_UP](context, data) {
    // return new Promise((resolve, reject) => {
    signup(data.account, data.password).then(res => {
      const data = res.data;
      //注册成功
      if (data.success) {
        // context.commit("SET_MESSAGE",data);
        localStorage.setItem("user-token", data.token);
        context.commit("SET_MESSAGE", data);
        context.commit("TOKEN", data.token);

        swal({
          // title: 'SUCCESS!',
          text: data.message,
          icon: "success",
          button: "Yohooo.."
        }).then(() => {
          location.href = "http://localhost:8080/main-part";
        });
        // resolve();
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
    // });
  },

  //登录
  [types.SIGN_IN](context, data) {
    // return new Promise((resolve, reject) => {
    signin(data.account, data.password).then(res => {
      const data = res.data;
      context.commit("SET_MESSAGE", data);

      //登录成功
      if (data.success) {
        localStorage.setItem("user-token", data.token);
        context.commit("TOKEN", data);

        swal({
          // title: 'success'
          text: data.message,
          icon: "success",
          button: "Yohoo.."
        }).then(() => {
          location.href = "http://localhost:8080/main-part";
        });
        // resolve();
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
    // });
  },

  //发布文章
  [types.UPLOAD_ARTICLE](context, article) {
    // return new Promise((resolve, reject) => {

    uploadArticle(article).then(res => {
      context.commit("SET_MESSAGE", res.data);
      // console.log(res.data)
      //文章发布成功
      if (res.data.success) {
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

  //更新点击量
  UPDATE_VIEW_NUM(context){

    let author = context.getters.article._id;
    updateViewNum(author)
    
  }
};

export default actions;
