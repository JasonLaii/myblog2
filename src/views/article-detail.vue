<template>
  <div class="article-container">
    <content-card :article="article"></content-card>
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
    contentCard: ()=>import('../components/content-card')
  },

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
