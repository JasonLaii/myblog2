<template>
  <div>
    <Header></Header>
    <MainPart></MainPart>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    Header: () => import("../components/header"),
    Footer: () => import("../components/footer"),
    ContentCard: ()=> import('../components/content-card'),
    MainPart: ()=> import('../components/main-part')
  }
};
</script>

<style lang="less">
@import "../../public/style/style.less";

body {
  background: none;
  background-color: #eee;
}
</style>
