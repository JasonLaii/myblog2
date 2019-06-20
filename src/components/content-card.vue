<template>
  <div class="content-card">
    <div class="avatar">
      <i>
        <img src="image/avatar.jpg" alt="avatar">
      </i>
    </div>
    <div class="card">
      <div class="card-title">
        <h3>TEST TITLE</h3>
      </div>

      <div class="card-summary">
        <p>TEST CONTENT</p>
        <p>TEST CONTENT</p>
        <p>TEST CONTENT</p>
        <p>TEST CONTENT</p>
        <p>TEST CONTENT</p>
        <p>TEST CONTENT</p>
      </div>

      <div class="card-info">
        <span class="card-info-watched">浏览：100</span>
        <span class="card-info-comment"> <a> 评论：99</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../public/style/style.less";

p {
  margin: 0;
}

.content-card {
  padding: 30px 16px;
  margin: 30px 0;
  background-color: #fff;
  border-radius: 3px;
  border: none;
  .box-shadow()
}
.avatar {
  width: 8%;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
  img {
    width: 100%;
    height: 100%;
    border-radius: 90px;
  }
}

.card {
  border: 1px solid #aaa;
  border-radius: 3px;
  padding: 30px 10px 10px 10px;
  display: inline-block;
  width: 82%;
  
  .card-title {
    padding: 0 0 10px;
    border-bottom: 1px solid #bbb;
    
  }
  .card-summary {
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #bbb;
    font-size: 14px;
  }
  .card-info {
    padding: 4px 0 0 0;
    font-size: 12px;
    .card-info-comment{
      float: right;
    }
  }
}
</style>
