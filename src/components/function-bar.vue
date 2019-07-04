<template>

  <div class="function-bar-container">
    
    <div>
      <router-link to="/main-part">更新文章</router-link>
    </div>

    <div>
      <router-link :to="{ path: `/posts/${this.article.author._id}/comment`}">发表评论</router-link>
    </div>

    </div>  
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props: ['article'],
  methods:{

  }
}
</script>

<style lang="less" scoped>

.function-bar-container{
  position: fixed;
  top: 30%;
  right: 10%;
  div{
    width: 80px;
    a{
      border-radius: 10px;
      background-color: rgba(255, 0, 0, .4);
      width: 100%;
      height: 100%;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      padding: 10px 4px;
      margin-bottom: 10px;
      box-shadow: 2px 2px 10px #bbb;
    }
  }
}
</style>
