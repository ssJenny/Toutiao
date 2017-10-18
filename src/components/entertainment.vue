<template>
  <div class="container">
    <section v-for="entertainmentItem in entertainmentlist">
      <div class="list-item">
        <h2 class="title">{{entertainmentItem.title}}</h2>
        <ul class="imgs" v-if="entertainmentItem.has_image">
          <li class="img-list" v-for="imgItem in entertainmentItem.image_list">
            <img :src="imgItem.url" alt="" >
          </li>
        </ul>

      </div>
    </section>
  </div>
</template>
<script>
  var vm ;

  import {getEntertainment} from "assets/js/getImfor.js";
  export default {
    name: 'entertainment',
    data() {
      return {
        entertainmentlist:[]
      }
    },
    created() {
      vm = this;
      vm._getEntertainment();
    },
    methods: {
      _getEntertainment() {
        getEntertainment().then((res) => {
          vm.entertainmentlist = res.data;
        })
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
