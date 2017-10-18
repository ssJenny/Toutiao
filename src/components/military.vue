<template>
  <div class="container">
    <section v-for="militaryItem in militarylist">
      <div class="list-item">
        <h2 class="title">{{militaryItem.title}}</h2>
        <ul class="imgs" v-if="militaryItem.has_image">
          <li class="img-list" v-for="imgItem in militaryItem.image_list">
            <img :src="imgItem.url" alt="" >
          </li>
        </ul>

      </div>
    </section>
  </div>
</template>
<script>
  var vm ;

  import {getMilitary} from "assets/js/getImfor.js";
  export default {
    name: 'military',
    data() {
      return {
        militarylist:[]
      }
    },
    created() {
      vm = this;
      vm._getMilitary();
    },
    methods: {
      _getMilitary() {
        getMilitary().then((res) => {
          vm.militarylist = res.data;
        })
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
