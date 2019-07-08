<template>
  <div class="article-container">

    <detail-card :article="article">

    </detail-card>

    <function-bar :article="article"></function-bar>
    
  </div>
</template>

<script>

export default {
  name: 'article-detail',
  data(){
    return{
      article: {}
    }
  },
  components:{
    contentCard: ()=> import('../components/content-card'),
    detailCard: ()=> import('../components/detail-card'),
    commentCard: ()=> import('../components/comment-card'),
    functionBar: ()=> import('../components/function-bar')
},
  created(){
    this.article = this.$store.getters.article
  },
  mounted(){
    
    //在页面刷新前将postId存储到sessionStorage
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem('postId',this.article._id)      
    })
    
    
    //
    if(this.$store.getters.article.title){
      console.log('have aritlce')
    }else{
      console.log('no article')
      this.$store.dispatch("GET_POST_BY_ID",sessionStorage.getItem('postId')).then(()=>{
        this.article = this.$store.getters.article
      })

    }

}

}
</script>
<style lang="less" scoped>
p{
  margin: 0;
}
.article-container{
  margin: 0 auto;
  width: 60%;
  height: 100%;
}
</style>
