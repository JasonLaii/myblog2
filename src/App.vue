<template>
  <div id="app">
    <!-- <cover></cover> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    cover:()=>import('./views/cover')
  }
}
</script>

<style lang="less">
@import '../public/style/style.less';
body{
  .background()
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
</style>
