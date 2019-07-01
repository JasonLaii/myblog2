<template>
  <div class="comment-card">
    
    <div class="avatar">
      <i>
        <img src="../../public/image/avatar.jpg" alt="avatar">
      </i>
    </div>


    <div class="comment-info">
      <span class="comment">我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你我爱你</span>
      <span class="comment-time">2019-06-28</span>
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
    // float: left;
    img{

    }
  }
  .comment-info{
    display: inline-block;
    width: 90%;
    height: 100%;
    span{
      display: inline-block;
      font-size: 14px;
      font-family:Arial, Helvetica, sans-serif;
      height: 100%;
    }
    .comment{
      
    }
    .comment-time{
      float: right;
    }
  }
}
</style>
