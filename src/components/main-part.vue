<template>
  <div class="main-part">
      
      <ContentCard></ContentCard>
      
    </div>  
</template>

<script>
export default {
  data(){
    return{
      articles: [],
    }
  },
  components:{
    ContentCard:()=> import('../components/content-card'),
  },
  mounted(){
    
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
