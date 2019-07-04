<template>
  <div class="comment-card">
    
    <div class="avatar">
      <i>
        <img src="../../public/image/avatar.jpg" alt="avatar">
      </i>
    </div>


    <div class="comment-info">
      <span class="comment">我爱你我爱你我爱你我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱我爱你我爱你我爱</span>
      <span class="comment-time">2019-06-28</span>
    </div>

    <div class="comment-del">
      <button>删除评论</button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
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
