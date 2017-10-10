<template>
  <div class="tab">
    <div class="item-ul">
      <router-link v-for="(value,key) in tabList" class="tab-item" tag="div" :class="{actice: value.id==1}" :to="value.link" :key="value.id"  >
        <span class="tab-link">{{value.name}}</span>
      </router-link>
    </div>
    <span class="add iconfont icon-add"></span>
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
    }
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  .tab{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    width: 100%;
    background-color: #f4f5f6;
    overflow: hidden;
    position: relative;
    white-space:nowrap;
  }
  .item-ul{
    overflow: hidden;
    height: 3rem;
    overflow-x: scroll;
    .tab-item{
      float: left;
      white-space: nowrap;
      color: #666;
      .tab-link{
        padding: 0 1rem 0 1rem;
      }
      /*&.router-link-active{*/
        /*!*.tab-link{*!*/
          /*color: #f85959;*/
        /*!*}*!*/
      /*}*/
    }
  }

  .add{
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-color: #f4f5f6;
    color: #f85959;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    font-size: 2rem;
  }
</style>
