<template>
  <div class="content-card" @click="gotoDetail">
    
    <div class="avatar">
      <i>
        <img src="image/avatar.jpg" alt="avatar">
      </i>
    </div>

    <div class="card">
      <div class="card-title">
        <h3>{{article.title}}</h3>
      </div>

      <div class="card-summary">{{article.summary}}</div>
      <!-- <div class="card-content">{{article.content}}</div> -->

      <div class="card-info">
        <span class="card-info-watched">浏览：{{article.watched}}</span>
        <span class="card-info-comment">
          <a>评论：{{article.comment}}</a>
        </span>
      </div>

      <!--留言 -->
      <!-- <template> -->
        <div class="card-comment">
          <slot name="comment"></slot>
        </div>
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
      // avatar: '',
      // title: '',
      // content: '',
      // watched: Number,
      // comment: Number,
      props: ["article"]
    };
  },
  methods: {
    gotoDetail() {
      // this.$router.push('/article-detail')
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
