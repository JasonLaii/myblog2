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
    <template v-if="isAuthor || isDiscusser">

      <div class="comment-del">
        <button @click="delComment">删除评论</button>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:['comment'],
  methods:{
    delComment(){
      
      this.$store.dispatch("DELETE_COMMENT",this.comment).then(()=>{
        
        this.$router.push(`/main-part`)
      })
    }
  },
  mounted(){
  },
  computed:{
    //判断是否留言本人
    isDiscusser(){
      // console.log("isDiscusser")
      // console.log("this.comment.author     " +this.comment.author)
      // console.log(this.comment.author)
      // console.log("user._id    " + sessionStorage.getItem('user_id'))
      // console.log(sessionStorage.getItem('user_id')  == this.comment.author._id)
      return sessionStorage.getItem('user_id')  == this.comment.author._id ? true : false;
    },
    //判断是否博主
    isAuthor(){
      // console.log("isAuthor")
      // console.log("sessionStorage.getItem   " + sessionStorage.getItem('user_id'))
      // console.log("store.getters.article.author._id   " + this.$store.getters.article.author)
      // console.log(this.$store.getters.article.author)
      // console.log( sessionStorage.getItem('use_id') == (this.$store.getters.article.author._id || this.$store.getters.article.author) )
      console.log(sessionStorage.getItem('use_id') == this.$store.getters.article.author._id || sessionStorage.getItem('user_id') == this.$store.getters.article.author ? true : false)
      // return sessionStorage.getItem('use_id') == this.$store.getters.article.author._id || sessionStorage.getItem('user_id') == this.$store.getters.article.author ? true : false;
      return sessionStorage.getItem('use_id') == (this.$store.getters.article.author._id || this.$store.getters.article.author) ? true : false;
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
