<template>
  <div class="tab">
    <router-link v-for="(tabItem,key) in tabList" class="tab-item" tag="div" :to="tabItem.link">
      <span class="tab-link">{{tabItem.name}}</span>
    </router-link>
  </div>
</template>

<script>
  import {getTabList} from "assets/js/tabList.js";
  var vm;
  export default {
    name: 'tab',
    data() {
      return{
        tabList: []
      }
    },
    created() {
      vm = this;
      vm.tabList = getTabList();
      console.log(vm.tabList)
    },
    methods: {
//      initTab(){
//
//      }
    }
  }

</script>
<style scoped lang="less" rel="stylesheet/less">

</style>
