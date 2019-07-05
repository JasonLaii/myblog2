<template>
  <div class="comment-card">
    
    <div class="avatar">
      <i>
        <img src="../../public/image/avatar.jpg" alt="avatar">
      </i>
    </div>

    <div class="comment-info">
      <span class="comment">{{comment.comment}}</span>
      <span class="comment-time" >{{comment.created_at}}</span>
    </div>

    <!-- 判断是否是留言本人、文章博主 -->
    <template v-if="show">
      
    </template>

    <div class="comment-del">
      <button @click="delComment">删除评论</button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false,
    }
  },
  props:['comment'],
  methods:{
    delComment(){
      this.$store.dispatch("DELETE_COMMENT")
    }
  },
  mounted(){
    if(!localStorage.getItem('user-token')){
      this.show = false
    }
    if( this.$store.getters.message._id == comment.author){
      this.show = true;
    }
  }
}
</script>

<style lang="less" scoped>

.comment-card{
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px 8px;
  margin: 22px 0;
  .avatar{
    display: inline-block;
    width: 45px;
    height: 45px;
  }
  .comment-info{
    display: inline-block;
    width: 76%;
    height: 100%;
    span{
      display: inline-block;
      font-size: 14px;
      font-family:Arial, Helvetica, sans-serif;
      height: 100%;
    }

    .comment-time{
      float: right;
    }
  }

  .comment-del{
    width: 10%;
    display: inline-block;
    vertical-align: middle;
    margin-left: 16px;
    button{
      border-radius: 10px;
      background: rgba(255, 0, 0, .5);
      outline: none;
      border: none;
      padding:  6px;
    }
  }
}
</style>
