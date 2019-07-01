<template>
  <div class="detail-card">
    <!-- 头像 -->
    <div class="avatar">
      <i>
        <img src="../../public/image/avatar.jpg" alt="avatar">
      </i>
    </div>

    <div class="card">
      <!-- 文章标题 -->
      <div class="card-title">
        <h3>{{article.title}}</h3>
      </div>
      <!-- 文章内容 -->
      <div class="card-content">{{article.content}}</div>

      <!-- 浏览、评论删除 -->
      <div class="card-info">
        <span class="card-info-watched">浏览：{{article.viewNum}}</span>
        <span class="card-info-comment">
          <a>评论:{{article.commentNum}}</a>
        </span>
      </div>

      <!-- 评论区 -->
      <div class="card-comment">
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // article:{},
    };
  },
  props: ["article"],
  components: {
    commentCard: () => import("./comment-card")
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";
</style>
