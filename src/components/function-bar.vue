<template>
  <div class="function-bar-container">
    <div>
      <router-link to="/main-part">更新文章</router-link>
    </div>

    <template v-if="this.$store.getters.article.author._id == this.$store.getters.message._id">
      <div>
        <router-link to="" @click="delPost">删除文章</router-link>
      </div>
    </template>

    <div>
      <router-link :to="{ path: `/posts/${this.article.author._id}/comment`}">发表评论</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: ["article"],
  methods: {
    delPost(){

      // try{

      // }catch(err){

      // }

      this.$store.dispatch("DELETE_ARTICLE").then(()=>{
        this.$router.push('/main-part')
      })
    }
  },
  mounted() {

  }
};
</script>

<style lang="less" scoped>
.function-bar-container {
  position: fixed;
  top: 30%;
  right: 10%;
  div {
    width: 80px;
    a {
      border-radius: 10px;
      background-color: rgba(255, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      padding: 10px 4px;
      margin-bottom: 10px;
      box-shadow: 2px 2px 10px #bbb;
    }
  }
}
</style>
