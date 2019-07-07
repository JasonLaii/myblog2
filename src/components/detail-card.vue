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
      <div class="card-content" v-html="article.content">
        
        </div>

      <!-- 浏览、评论删除 -->
      <div class="card-info">
        <span class="card-info-watched">浏览：{{article.viewNum}}</span>
        <span class="card-info-comment">
          <a>评论:{{article.commentNum}}</a>
        </span>
      </div>

      <!-- 评论区 -->
      <div class="card-comment">
        <comment-card v-for="(comment,index) in this.commentList" :key="index" :comment="comment"></comment-card>

      </div>

    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'

export default {
  data() {
    return {
      commentList:[]
    };
  },
  props: ["article"],
  components: {
    commentCard: () => import("./comment-card")
  },
  created(){


  },
  mounted(){

    //获取commentList
    this.$store.dispatch("GET_COMMENT_LIST",this.$route.params.articleId).then(()=>{      
      this.commentList = this.$store.getters.commentList
    })


  },
  computed:{
    
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";
</style>
