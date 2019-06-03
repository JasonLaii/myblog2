<template>
  <form method="post" class="signin">
    <div>
      <label>ACCOUNT</label>
      <input type="text" name="account" placeholder="PLEASE ENTER YOUR ACCOUNT">
    </div>

    <div>
      <label>PASSWORD</label>
      <input type="password" name="password" placeholder="PLEASE ENTER YOUR PASSWORD">
    </div>
    <div>
    <input type="button" value="SIGNIN" class="signin-submit">

    </div>

    </form>  
</template>

<script>
export default {
  
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
