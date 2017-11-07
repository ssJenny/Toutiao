<template>
  <div class="index">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>


  </div>
</template>
<script>
  import Tab from "@/components/tab";
  import MHeader from "@/components/header.vue";

  export  default {
    name: 'index',
    components: {
      Tab,
      MHeader
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
