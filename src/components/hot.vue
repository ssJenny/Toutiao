<template>
  <div class="container">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="hotScroll">
      <div class="group" v-for="hot in hotList">
        <section v-for="hotItem in hot">
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
    </scroller>

  </div>
</template>
<script>
  var vm ;

  import {getHot} from "../assets/js/getImfor.js";
  import VueScroller from "vue-scroller";
  import Vue from "vue"
  Vue.use(VueScroller);

  export default {
    name: 'hot',
    data() {
      return {
        hotlist:[]
      }
    },
    computed: {
      hotList () {
        return vm.$store.state.hotList;
      }
    },
    created() {
      vm = this;
      vm._getHot();
    },
    mounted() {
      if(vm.hotList.length === 0) {
        vm.$store.commit("addHot",vm.hotlist)
      }
    },
    methods: {
      _getHot() {
        getHot().then((res) => {
          vm.hotlist = res.data;
        })
      },

      infinite(done) {
        setTimeout( () => {
          vm._getHot();
          if(vm.hotlist.length === 0) {
            vm.noData = "没有更多数据";
          }else {
            vm.$store.commit("addHot",vm.hotlist)
          }
          vm.$refs.hotScroll.resize();
          done();
        },1500)
      },

      refresh(done) {
        setTimeout( () => {
          vm._getHot();
          vm.$store.commit("addHot",vm.hotlist);

          done();
        })
      }

    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../assets/less/list.less";
</style>


