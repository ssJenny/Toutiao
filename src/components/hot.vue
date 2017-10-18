<template>
  <div class="container">
    <section v-for="hotItem in hotlist">
      <div class="list-item">
        <h2 class="title">{{hotItem.title}}</h2>
        <ul class="imgs" v-if="hotItem.has_image">
          <li class="img-list" v-for="imgItem in hotItem.image_list">
            <img :src="imgItem.url" alt="" >
          </li>
        </ul>

      </div>
    </section>
  </div>
</template>
<script>
  var vm ;

  import {getHot} from "assets/js/getImfor.js";
  export default {
    name: 'hot',
    data() {
      return {
        hotlist:[]
      }
    },
    created() {
      vm = this;
      vm._getHot();
    },
    methods: {
      _getHot() {
        getHot().then((res) => {
          vm.hotlist = res.data;
        })
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>


