<template>
  <div class="function-bar-container">

    <!-- 是否登录 -->
    <template v-if="isLogin">
      <!-- 是否作者 -->
      <template v-if="isAuthor">
        <div>
          <router-link to="/main-part">更新文章</router-link>
        </div>
        <div>
          <span @click="delPost">删除文章</span>
        </div>
      </template>

      <div>
        <router-link :to="{ path: `/posts/${this.article._id}/comment`}">发表评论</router-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["article"],
  methods: {
    delPost() {
      let postId = this.$route.params.articleId
      console.log('postId   '+postId)
      this.$store.dispatch("DELETE_ARTICLE",postId)
    }
  },
  created() {},
  mounted() {},
  computed: {
    isLogin() {
      return localStorage.getItem("user-token") ? true : false;
    },
    isAuthor() {

      return this.$store.getters.article.author || this.$store.getters.article.author._id ==
        sessionStorage.getItem('user_id')
        ? true
        : false;
    }
  }
};
</script>

<style lang="less" scoped>
.function-bar-container {
  position: fixed;
  top: 30%;
  right: 10%;
  div {
    width: 80px;
    a,span {
      border-radius: 10px;
      background-color: rgba(255, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      padding: 10px 4px;
      margin-bottom: 10px;
      box-shadow: 2px 2px 10px #bbb;
      cursor: pointer;
    }
  }
}
</style>
