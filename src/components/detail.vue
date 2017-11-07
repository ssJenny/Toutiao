<template>
  <div>
    <header class="header">
      <i class="back iconfont icon-more" @click="goBack"></i>
    </header>
    <div class="container">
      <h1 class="title">{{newsContent.title}}</h1>
      <div class="subhead">
      <span class="author">
        {{newsContent.detail_source}}
      </span>

      </div>
      <div class="detail" v-html="newsContent.content">
      </div>
    </div>
    </div>
</template>
<script>
  var vm;

  import $ from 'jquery';
  export default {
    name: 'detail',
    data() {
      return {
        newsContent: {},
        tag_id:this.$route.params.tag_id,
      }
    },
    created() {
      vm = this;

      vm._getInfo();
      console.log(vm.tag_id)
    },

    methods: {
      _getInfo(){
        let reqUrl = 'https://m.toutiao.com/i'+vm.tag_id+'/info/'
        $.ajax({
          type: 'get',
          url: reqUrl,
          dataType: 'jsonp',
          success: function (res) {
            console.log(res.data)
            vm.newsContent = res.data
          }
        })
      },
      goBack() {
        vm.$router.goBack();
      }
    }
  }
</script>
<style scoped lang="less" ref="stylesheet/less">
  @import "../assets/less/variable.less";

  .header{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    background-color: @theme-color;
    color: #fff;
    position: fixed;
    z-index: 100;
    i.back{
      margin-left: 1.5rem;
      color: #fff;
      font-size: 2.5rem;
    }
  }
  .container{
    position: relative;
    top: 5rem;
    width: 90%;
    height: 100%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    .detail{
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-indent: 1.5rem;
      img{
        width: 80% !important;
        height: 50rem !important;
      }

    }
  }
</style>
