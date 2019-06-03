<template>
  <div>
    <Header></Header>
    
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
    Footer: () => import("../components/footer")
  }
};
</script>

<style lang="less">
@import "../../public/style/style.less";

body {
  background: none;
  background-color: #feffff;
}
</style>
