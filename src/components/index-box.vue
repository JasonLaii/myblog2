<template>
  <div class="index-box">
    <div class="signup">
      <router-link to="/signup"><p>SIGN UP</p></router-link>
    </div>
    <div class="signin">
      <router-link to="/signin"><p>SIGN IN</p></router-link>
    </div>

    <div class="visitor">
      <router-link to="/index"><p>VISIT AS VISITOR</p></router-link>
    </div>

    </div>  
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  
}
</script>

<style lang="less" scoped>
@import '../../public/style/style.less';

.index-box{
  .cover-box()

}

.signup, .signin, .visitor{
  width: 80%;
  border-radius: 12px;
  background-color: rgba(105, 104, 109, 0.4);
  margin: 1em auto;
  
  p{
    font-size: 8vw;
    line-height: 12vw;
    margin: 0;
    text-align: center;
    color: #fff;
  }
  :hover{
    background-color: rgba(105, 104, 109, 0.6);
    .box-shadow();
  }
}
</style>
