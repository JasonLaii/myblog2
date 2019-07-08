<template>
  <form class="upload-comment">
    <div class="comment-content">
      <label>留言</label>
      <input type="text" name="comment" v-model="comment" />
    </div>

    <div>
      <input type="button" value="留言" class="comment-button" @click="uploadComment" />
    </div>
  </form>
</template>


<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    uploadComment() {
      try {
        if (!this.comment) {
          throw new Error("留言内容不能为空！");
        }
        let postId = this.$route.params.articleId;
        let data = {
          author: "",
          postId: postId,
          comment: this.comment,
          token: localStorage.getItem("user-token")
        };

        this.$store.dispatch("UPLOAD_COMMENT", data).then(()=>{
          
          this.$router.push(`/posts/${this.$store.getters.article._id}`)
        });
      } catch (e) {
        let error = e.toString().slice(6);
        swal({
          text: error,
          icon: "error",
          button: "Retry..."
        });
      }
    }
  },
  
  mounted() {
    if (!localStorage.getItem("user-token")) {
      swal({
        text: "您尚未登录！",
        icon: "error",
        button: "pwuu.."
      }).then(() => {
        this.$router.push("/main-part");
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";

.upload-comment {
  margin: 40px auto;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 30px 16px;
  .box-shadow();
  div {
    width: 90%;
    margin: 30px auto;
    label {
      .form-label();
    }
    input {
      .form-input();
    }
  }
}
</style>
