<template>
  <div class="container">
    <section v-for="societyItem in societylist">
      <div class="list-item">
        <h2 class="title">{{societyItem.title}}</h2>
        <ul class="imgs" v-if="societyItem.has_image">
          <li class="img-list" v-for="imgItem in societyItem.image_list">
            <img :src="imgItem.url" alt="" >
          </li>
        </ul>

      </div>
    </section>
  </div>
</template>
<script>
  var vm ;

  import {getSociety} from "assets/js/getImfor.js";
  export default {
    name: 'society',
    data() {
      return {
        societylist:[]
      }
    },
    created() {
      vm = this;
      vm._getSociety();
    },
    methods: {
      _getSociety() {
        getSociety().then((res) => {
          vm.societylist = res.data;
        })
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
