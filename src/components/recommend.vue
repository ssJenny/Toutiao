<template>
  <div class="container">
    <section v-for="recommend in recommendlist">
      <div class="list-item">
        <h2 class="title">{{recommend.title}}</h2>
        <ul class="imgs" v-if="recommend.has_image">
          <li class="img-list" v-for="imgItem in recommend.image_list">
            <img :src="imgItem.url" alt="" >
          </li>
        </ul>

      </div>
    </section>
  </div>
</template>

<script>
  var vm;
  import {getRecommend} from "assets/js/getImfor.js";

  export default {
    name: 'recommend',
    data() {
      return{
        recommendlist: []
      }
    },
    created() {
      vm = this;
     vm._getRecommend();
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          vm.recommendlist = res.data;
        })
      },
    }
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
