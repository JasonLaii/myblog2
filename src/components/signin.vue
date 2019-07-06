<template>
  <form method="post" class="signin">
    <div>
      <label>ACCOUNT</label>
      <input type="text" name="account" placeholder="PLEASE ENTER YOUR ACCOUNT" v-model="account">
    </div>

    <div>
      <label>PASSWORD</label>
      <input
        type="password"
        name="password"
        placeholder="PLEASE ENTER YOUR PASSWORD"
        v-model="password"
      >
    </div>
    <div>
      <input type="button" value="SIGNIN" class="signin-submit" @click="signin">
    </div>
  </form>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    signin() {
      try {
        if (this.account === "") {
          throw new Error("账号不能为空！！");
        }
        if (this.password === "") {
          throw new Error("密码不能为空！！");
        }

        const data = {
          account: this.account,
          password: this.password
        };

        this.$store.dispatch("SIGN_IN", data)
        .then(() => {
          // if (this.$store.getters.message.success) {
            this.$router.push("/main-part");
          // }
        });
        
      } catch (err) {
        let error = err.toString().slice(6);

        swal({
          text: error,
          icon: "error",
          button: "Retry!!"
        });
      }
    }
  }
};
</script>

<style lang="less">
@import "../../public/style/style.less";

.signin {
  .sign-box();
}
.signin-submit {
  .button();
}
</style>
