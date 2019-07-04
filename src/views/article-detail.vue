<template>
  <div class="article-container">

    <detail-card :article="article">

    </detail-card>

    <function-bar :article="article"></function-bar>
    
  </div>
</template>

<script>

export default {
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
  mounted(){

    this.article = this.$store.getters.article

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
