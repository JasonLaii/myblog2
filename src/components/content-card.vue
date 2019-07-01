<template>
  <div class="content-card">
    
    <div class="avatar">
      <i>
        <img src="image/avatar.jpg" alt="avatar">
      </i>
    </div>

    <div class="card" @click="gotoDetail(article.author._id)">
      <div class="card-title">
        <h3>{{article.title}}</h3>
      </div>

      <div class="card-summary">{{article.summary}}</div>
      <!-- <div class="card-content">{{article.content}}</div> -->

    <!-- 评论 -->
      <div class="card-info">
        
        <span class="card-info-watched">浏览：{{article.viewNum}}</span>
        <span class="card-info-comment">
          <a>评论：{{article.commentNum}}</a>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: ['article'],
  methods: {
    gotoDetail(uid) {

      this.$store.dispatch("UPDATE_VIEW_NUM");
      this.$store.commit("ARTICLE",this.article)
      this.$router.push(`/posts/${uid}`)

    }
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";

p {
  margin: 0;
}
</style>
