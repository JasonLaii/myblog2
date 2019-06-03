<template>
  <div class="cover" >
    <p class="coverH">HELLO</p>
    <p class="coverW">WORLD</p>
  </div>
</template>

<script>
export default {

  methods:{

  },
  mounted(){
    setTimeout(() => {
      this.$router.push('/index-box')
    }, 2000);
},
  computed:{

  }
  
}
</script>

<style lang="less">

@import '../../public/style/style.less';



.cover{
  .cover-box();
  p{  
  font-family: amatic;
  font-weight: 900;
  text-align: center;
  margin: 0;
  padding: 0.1em 0;
  color: #fff;

  }
}

</style>
