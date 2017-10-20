<template>
  <div class="container">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="entertainScroll">
      <div class="group" v-for="entertainment in entertainmentList">
        <section v-for="entertainmentItem in entertainment">
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
    </scroller>

  </div>
</template>
<script>
  var vm ;

  import {getEntertainment} from "assets/js/getImfor.js";
  import VueScroller from "vue-scroller";
  import Vue from "vue";
  Vue.use(VueScroller);
  export default {
    name: 'entertainment',
    data() {
      return {
        entertainmentlist:[]
      }
    },
    computed: {
      entertainmentList() {
        return vm.$store.state.entertainmentList;
      }
    },
    created() {
      vm = this;
      vm._getEntertainment();
    },
    mounted() {
      if(vm.entertainmentList.length === 0) {
        vm.$store.commit("addEntertainment",vm.entertainmentlist)
      }
    },
    methods: {
      _getEntertainment() {
        getEntertainment().then((res) => {
          vm.entertainmentlist = res.data;
        })
      },

      infinite(done) {
        setTimeout( () => {
          vm._getEntertainment();
          if(vm.entertainmentlist.length === 0) {
            vm.noData = "没有更多数据"
          }else {
            vm.$store.commit("addEntertainment",vm.entertainmentlist)
          }
          vm.$refs.entertainScroll.resize();
          done();
        },1500)
      },
      refresh(done) {
        setTimeout( () => {
          vm._getEntertainment();
          vm.$store.commit("addEntertainment",vm.entertainmentlist);
          done();
        },1500)
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
