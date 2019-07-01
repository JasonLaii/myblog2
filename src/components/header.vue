<template>
  <div class="header">
    <div class="header-title">
      <p>
        <!-- <a>{{title}}</a> -->
        <router-link to="/main-part">{{title}}</router-link>
      </p>
    </div>

    <div class="header-user">
      <i class="fa fa-user-circle-o fa-lg fa-fw" aria-hidden="true" @click=" show= !show"></i>
    </div>

    <template v-if="show">
      <div class="dropdown">
        <template v-if="flag">
          <!-- <a href="/main-part/upload-article">个人主页</a> -->
          <router-link to="/myinfo">个人主页</router-link>
          <!-- <a href="/main-part/upload-article">发表文章</a> -->
          <router-link to="/posts">发表文章</router-link>
          <!-- <a href>退出登录</a> -->
          <!-- <router-link to="/index/signin" @click="signout">退出登录</router-link> -->
          <a href="" @click="signout">退出登录</a>
        </template>

        <template v-else>
          <!-- <a href>登录</a> -->
          <router-link to="/index/signin">登录</router-link>
          <!-- <a href>注册</a> -->
          <router-link to="/index/signup">注册</router-link>
        </template>
      </div>
    </template>

    <div class="header-search">
      <input type="text" name="search">
      <button>
        <i class="fa fa-search fa-fw" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "我的blog",
      flag: false,
      show: false
    };
  },
  methods: {
    //退出登录
    signout(){
      localStorage.removeItem('user-token');
      this.$router.push('/main-part');
    }
  },
  mounted() {
    if (localStorage.getItem('user-token')) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";

@media screen and (min-width: 400px) {
  .header {
    .header();
  }
  .header-title {
    display: inline-block;
    padding-left: 1em;
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
.display {
  display: inline-block;
}
.dropdown {
  position: absolute;
  width: 100px;
  right: 2%;
  top: 80%;
  background-color: #fff;
  border-radius: 6px;
  outline: none;
  border: 0px;
  .box-shadow(1px, 1px, 6px);
  a {
    font-size: 14px;
    color: #000;
    display: block;
    text-align: center;
    padding: 16px 16px;
  }
  a:hover {
    background-color: rgba(238, 238, 238, 1);
    font-weight: 100;
    .box-shadow(1px, 1px, 6px);
  }
}
</style>
