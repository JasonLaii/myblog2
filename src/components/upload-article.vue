<template>
  <div class="upload-container">
    <form action method="post" class="upload-article">
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
        <input type="submit" value="发布文章" class="article-button" @click="upload">
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
        // if (this.content.length < 100) {
        //   throw new Error("文章内容不能少于100字");
        // }

        const data = {
          title: this.title,
          summary: this.summary,
          content: this.content,
          token: localStorage.getItem('user-token')
        };
        console.log(data)
        this.$store.dispatch("UPLOAD_ARTICLE", data)
        .then(()=>{
          console.log("back to components")
          this.$router.push(`/article-detail/${this.$store.getters.message.articleId}`)
        })

      } catch (err) {
        let error = err.toString().slice(6);

        swal({
          text: error,
          icon: "error",
          button: "Retry!!"
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";
.upload-container {
  margin: 0 auto;
  width: 50%;
  height: 100%;
  .upload-article {
    padding: 30px 16px;
    margin: 30px 0;
    background-color: #fff;
    border-radius: 3px;
    border: none;
    .box-shadow();
    div {
      width: 90%;
      margin: 30px auto;
      label {
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        display: block;
        text-align: left;
      }
      input {
        font-size: 12px;
        line-height: 22px;
        width: 90%;
        margin-bottom: 8px;
        padding-left: 10px;
      }
      textarea {
        width: 90%;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
}

.article-button {
  cursor: pointer;
  .button();
  padding: 6px 0;
}
</style>
