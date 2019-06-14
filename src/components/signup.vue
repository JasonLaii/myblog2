<template>
  <form method="post" class="signup">
    <div class="signup-account">
      <label>ACCOUNT</label>
      <input
        type="text"
        name="account"
        placeholder="PLEASE ENTER YOUR ACCOUNT BETWEEN 6-12"
        v-model="account"
      >
    </div>

    <div class="signup-password">
      <label>PASSWORD</label>
      <input
        type="password"
        name="password"
        placeholder="PLEASE ENTER YOUR PASSWORD BETWEEN 6-12"
        v-model="password"
      >
    </div>

    <div class="signup-repassword">
      <label>REPASSWORD</label>
      <input
        type="password"
        name="repassword"
        placeholder="PLEASE ENTER YOUR PASSWORD AGAIN"
        v-model="repassword"
      >
    </div>

    <div class="signup-submit" @click="signup">
      <input type="button" value="SIGNUP">
    </div>
  </form>
</template>
<script>
import swal from "sweetalert";
import { signup } from "../api/user";

export default {
  data() {
    return {
      account: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    signup() {
      try {
        if (!this.account) {
          throw new Error("账号不能为空！！");
        }
        if (this.password === "") {
          throw new Error("密码不能为空！！");
        }
        if (this.repassword === "") {
          throw new Error("请再次输入密码！！");
        }
        if (this.password !== this.repassword) {
          throw new Error("两次输入的密码不一致！！");
        }
      } catch (err) {
        let error = err.toString().slice(6);

        swal({
          title: "ERROR",
          text: error,
          icon: "error",
          button: "Retry!"
        });
      }

      const data = {
        account: this.account,
        password: this.password
      };

      //vuex-action 要使用actions 不能用action
      //用action会出现 [vuex]unknown action type:.. 问题
      this.$store.dispatch("SIGN_UP",data)

    }
  }
};
</script>
<style lang="less">
@import "../../public/style/style.less";

.signup {
  .sign-box();
}

.signup-submit {
  input {
    .button();
  }
}
</style>
