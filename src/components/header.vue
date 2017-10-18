<template>
    <div class="header">
      <div class="title">
        <h1>今日头条</h1>
        <div class="refresh iconfont icon-refresh"></div>
      </div>
      <div class="msg iconfont icon-youjian"></div>
      <div class="search iconfont icon-icon15"></div>
    </div>
</template>
<script>
  var vm ;

  export default {
    name: 'header'
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/variable.less";

  .header{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    background-color: @theme-color;
    color: #fff;
    position: fixed;
    z-index: 100;
  }
  .title{
    width: 10rem;
    height: 4rem;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    margin-left: -5rem;
  }
  .title h1{
    line-height: 4rem;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    float: left;
  }
  .title .refresh{
    .icon;
    float: left;
  }

  .msg{
    .icon;
    left: 1.6rem;
    position: absolute;
  }

  .search{
    .icon;
    position: absolute;
    right: 1.6rem;
  }


</style>
