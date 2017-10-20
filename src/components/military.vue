<template>
  <div class="container">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="militaryScroll">
      <div class="group" v-for="military in militaryList">

        <section v-for="militaryItem in military">
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
    </scroller>
  </div>
</template>
<script>
  var vm ;

  import {getMilitary} from "assets/js/getImfor.js";
  import VueScroller from "vue-scroller";
  import Vue from "vue";
  Vue.use(VueScroller);
  export default {
    name: 'military',
    data() {
      return {
        militarylist:[]
      }
    },
    computed: {
      militaryList() {
        return vm.$store.state.militaryList;
      }
    },
    created() {
      vm = this;
      vm._getMilitary();
    },
    mounted() {
      if(vm.militaryList.length === 0) {
        vm.$store.commit("addMilitary",vm.militarylist);
      }
    },
    methods: {
      _getMilitary() {
        getMilitary().then((res) => {
          vm.militarylist = res.data;
        })
      },
      infinite(done) {
        setTimeout( () => {
          vm._getMilitary();
          if(vm.militarylist.length === 0) {
            vm.noData = "没有更多数据";
          }else {
            vm.$store.commit("addMilitary", vm.militarylist);
          }
          vm.$refs.militaryScroll.resize();
          done();
        },1500)
      },
      refresh(done) {
        setTimeout( () => {
          vm._getMilitary();
          vm.$store.commit("addMilitary", vm.militarylist);
          done();
        },1500)
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
