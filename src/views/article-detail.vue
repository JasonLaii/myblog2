<template>
  <div class="article-container">

    <detail-card :article="article">


    </detail-card>
    
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
    commentCard: ()=> import('../components/comment-card')
},
  mounted(){
    // console.log("in article-detail")
    console.log("article-detail components.")
    console.log(this.$store.getters)

    this.article = this.$store.getters.article
    // console.log(this.article)
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
