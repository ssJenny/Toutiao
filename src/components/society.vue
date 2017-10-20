<template>
  <div class="container">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="societyScroll">
      <div class="group" v-for="society in societyList">
        <section v-for="societyItem in society">
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
    </scroller>
  </div>
</template>
<script>
  var vm ;

  import {getSociety} from "assets/js/getImfor.js";
  import VueScroller from "vue-scroller";
  import Vue from "vue";
  Vue.use(VueScroller);
  export default {
    name: 'society',
    data() {
      return {
        societylist:[]
      }
    },
    computed: {
      societyList() {
        return vm.$store.state.societyList;
      }
    },
    created() {
      vm = this;
      vm._getSociety();
    },
    mounted() {
      if(vm.societyList.length === 0) {
        vm.$store.commit("addSociety",vm.societylist)
      }
    },
    methods: {
      _getSociety() {
        getSociety().then((res) => {
          vm.societylist = res.data;
        })
      },
      infinite(done) {
        setTimeout( () => {
          vm._getSociety();
          if(vm.societylist.length === 0) {
            vm.noData = "没有更多数据";
          }else{
            vm.$store.commit("addSociety",vm.societylist);
          }

          vm.$refs.societyScroll.resize();
          done();
        },1500);
      },

      refresh(done) {
        setTimeout(() =>{
          vm._getSociety();
          vm.$store.commit("addSociety",vm.societylist);
          done();
        },1500)
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
