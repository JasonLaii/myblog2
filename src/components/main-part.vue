<template>
  <div class="main-part">
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
    </div>  
</template>

<script>
export default {
  data(){
    return{

    }
  },
  components:{
    ContentCard:()=> import('../components/content-card'),
  }
}
</script>

<style lang="less" scoped>
p{
  margin: 0;
}
.main-part{
  background-color: #fff;
  margin: 0 auto;
  width: 60%;
  height: 100%;
}
</style>
