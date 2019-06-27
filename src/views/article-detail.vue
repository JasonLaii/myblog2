<template>
  <div class="article-container">
    <detail-card>
      <!-- slot -->
      <template #comment>
        <comment-card></comment-card>
      </template>
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
    detailCard: ()=> import('../components/detail-card'),
    commentCard: ()=> import('../components/comment-card')
},
  mounted(){
    // console.log("in article-detail")
    // console.log(this.$store.getters.article)

    // this.article = this.$store.getters.article
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
