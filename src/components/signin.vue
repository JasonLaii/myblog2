<template>
  <form method="post" class="signin">
    <div>
      <label>ACCOUNT</label>
      <input type="text" name="account" placeholder="PLEASE ENTER YOUR ACCOUNT" v-model="account">
    </div>

    <div>
      <label>PASSWORD</label>
      <input type="password" name="password" placeholder="PLEASE ENTER YOUR PASSWORD" v-model="password">
    </div>
    <div>
    <input type="button" value="SIGNIN" class="signin-submit" @click="signin">

    </div>

    </form>  
</template>

<script>
export default {
  data(){
    return{
      account: '',
      password: '',
    }
  },
  methods:{
    signin(){
      const data = {
        account: this.account,
        password: this.password
      }

      this.$store.dispatch("")
    }
  }
}
</script>

<style lang="less">
@import '../../public/style/style.less';

.signin{
  .sign-box();
}
.signin-submit{
  .button();
}
</style>
