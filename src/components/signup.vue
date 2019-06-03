<template>
  <form method="post" class="signup">
    <div class="signup-account">
      <label>ACCOUNT</label>
      <input type="text" name="account" placeholder="PLEASE ENTER YOUR ACCOUNT BETWEEN 6-12">
    </div>

    <div class="signup-password">
      <label>PASSWORD</label>
      <input type="password" name="password" placeholder="PLEASE ENTER YOUR PASSWORD BETWEEN 6-12">
    </div>

    <div class="signup-repassword">
      <label>REPASSWORD</label>
      <input type="password" name="repassword" placeholder="PLEASE ENTER YOUR PASSWORD AGAIN">
    </div>

    <div class="signup-submit">
      <input type="button" value="SIGNUP">
    </div>
  </form>

</template>
<script>
export default {};
</script>
<style lang="less">
@import "../../public/style/style.less";

.signup {
  .sign-box()
}

.signup-submit {
  input {
    .button()
  }
}
</style>
