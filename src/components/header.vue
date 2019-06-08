<template>
  <div class="header">
    <div class="header-title">
        <p><a>我的blog</a></p>
    </div>

    <div class="header-user">
      <i class="fa fa-user-circle-o fa-lg fa-fw" aria-hidden="true"></i>
    </div>

    <div class="header-search">
      <input type="text" name="search">
      <button>
        <i class="fa fa-search fa-fw" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";

@media screen and (min-width: 400px) {
  .header {
    .header();
  }
  .header-title {
    display: inline-block;
  }
  .header-search {
    display: inline-block;
    position: absolute;
    right: 10%;
    top: 28%;
    .header-search();
  }
  .header-user {
    display: inline-block;
    position: absolute;
    right: 4%;
    top: 30%;
  }
}
@media screen and (max-width: 400px) {
  .header {
    .header();
  }
  .header-title,
  .header-user {
    display: none;
  }

  .header-search {
    .header-search();
    margin: 20px auto;
    display: inline-block;
    width: 100%;
    input {
      width: 74%;
    }
  }
}
</style>
