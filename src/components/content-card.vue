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
        <!-- <h3>title</h3> -->
      </div>

      <div class="card-summary">
        {{article.content}}
        <!-- content -->
      </div>

      <div class="card-info">
        <span class="card-info-watched">浏览：{{article.watched}}</span>
        <!-- <span class="card-info-watched">浏览：12</span> -->
        <span class="card-info-comment"> <a> 评论：{{article.comment}}</a></span>
        <!-- <span class="card-info-comment"> <a> 评论：article.comment</a></span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      article:{
      },
      // avatar: '',
      // title: '',
      // content: '',
      // watched: Number,
      // comment: Number,
      props: ['article']
    }
  },
  methods:{
    gotoDetail(){
      this.$router.push('/article-detail')
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";

p {
  margin: 0;
}

.content-card {
  padding: 30px 16px;
  margin: 30px 0;
  background-color: #fff;
  border-radius: 3px;
  border: none;
  .box-shadow();
}
.avatar {
  width: 8%;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
  img {
    width: 100%;
    height: 100%;
    border-radius: 90px;
  }
}

.card {
  border: 1px solid #aaa;
  border-radius: 3px;
  padding: 30px 10px 10px 10px;
  display: inline-block;
  width: 82%;
  
  .card-title {
    padding: 0 0 10px;
    border-bottom: 1px solid #bbb;
    
  }
  .card-summary {
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #bbb;
    font-size: 14px;
  }
  .card-info {
    padding: 4px 0 0 0;
    font-size: 12px;
    .card-info-comment{
      float: right;
    }
  }
}
</style>
