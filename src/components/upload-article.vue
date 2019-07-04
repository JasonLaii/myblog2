<template>
  <div class="upload-container">
    <form method="post" class="upload-article">
      <div class="aritlce-title">
        <label>文章题目</label>
        <input type="text" name="title" v-model="title">
      </div>

      <div class="article-summary">
        <label for>文章简介</label>
        <input type="text" name="summary" v-model="summary">
      </div>

      <div class="article-content">
        <label for>正文</label>
        <textarea name="content" v-model="content" rows="10"></textarea>
      </div>
      <div>
        <input type="button" value="发布文章" class="article-button" @click="upload">
      </div>
    </form>
  </div>
</template>

<script>
import swal from "sweetalert";


export default {
  data() {
    return {
      title: "",
      summary: "",
      content: ""
    };
  },
  methods: {
    upload() {
      try {
        if (this.title == "") {
          throw new Error("标题不能为空");
        }
        if(this.summary === ""){
          throw new Error("文章简介不能为空");
        }
        if (this.content === "") {
          throw new Error("文章内容不能为空");
        }
        if (this.content.length < 100) {
          throw new Error("文章内容不能少于100字");
        }

        const data = {
          title: this.title,
          summary: this.summary,
          content: this.content,
          token: localStorage.getItem('user-token')
        };
        
        this.$store.dispatch("UPLOAD_ARTICLE", data)
        // .then(()=>{
          // console.log("in upload-article")
          // console.log(this.$store.getters.article)
          // this.$router.push(`/posts/${this.$store.getters.message.articleId}`)
          // this.$router.push(`/main-part`);
        // })

      } catch (err) {
        let error = err.toString().slice(6);

        swal({
          text: error,
          icon: "error",
          button: "Retry!!"
        });
      }
    }
  },
  mounted(){
    if(!localStorage.getItem('user-token')){
      swal({
        text: '您尚未登录！！',
        icon: 'error',
        button: 'ops...'
      }).then(()=>{
        location.href = 'http://localhost:8080/main-part'
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";




</style>
