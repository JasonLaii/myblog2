<template>
  <div>

    <Header></Header>
    <keep-alive exclude="article-detail">
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // token: this.$store.getters.token
    };
  },
  components: {
    Header: () => import("../components/header"),
    Footer: () => import("../components/footer"),
    ContentCard: () => import("../components/content-card"),
    MainPart: () => import("../components/main-part")
  }
};
</script>

<style lang="less">
@import "../../public/style/style.less";

body {
  background: none;
  background-color: rgba(258, 258, 258, 0.6);
}
</style>
