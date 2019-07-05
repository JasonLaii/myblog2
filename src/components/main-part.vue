<template>
  <div class="main-part">
      
      <content-card v-for="(article,index) in articleList" :key="index" :article="article"></content-card>
      
    </div>  
</template>

<script>
export default {
  data(){
    return{
      // articles: [],
      articleList: []
    }
  },
  components:{
    contentCard:()=> import('../components/content-card'),
  },
  mounted(){
    this.$store.dispatch("GET_ARTICLE_LIST").then(()=>{
      
      this.articleList = this.$store.getters.articleList;
      // console.log(this.articleList)
    });

  }
}
</script>

<style lang="less" scoped>
p{
  margin: 0;
}
.main-part{
  margin: 0 auto;
  width: 60%;
  height: 100%;
}
</style>
