<template>
  <div class="container">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="recommendScroll">
      <div class="group" v-for="recommend in recommendList">
        <section v-for="item in recommend">
          <div class="list-item">
            <h2 class="title">{{item.title}}</h2>
            <ul class="imgs" v-if="item.has_image">
              <li class="img-list" v-for="imgItem in item.image_list">
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
  var vm;
  import {getRecommend} from "assets/js/getImfor.js";
  import VueScroller from 'vue-scroller'
  import Vue from 'vue'
  Vue.use(VueScroller);

  export default {
    name: 'recommend',
    data() {
      return {
        recommend:[],
        noData:''
      }
    },
    computed: {
      recommendList() {
        return vm.$store.state.recommendList
      }
    },
    created() {
      vm = this;
      vm._getRecommend();
    },
    mounted() {
      if(vm.recommendList.length === 0) {
        vm.$store.commit('addRecommend',vm.recommend)
      }
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          vm.recommend = res.data;
        });
      },

      infinite(done) {

        setTimeout(() => {
         vm._getRecommend();
         if(vm.recommend.length === 0){
           vm.noData = "没有更多数据";
         }else{
           vm.$store.commit('addRecommend',vm.recommend)
         }

          vm.$refs.recommendScroll.resize();
          done()
        }, 1500)
      },
      refresh(done) {
        setTimeout( () => {
          vm._getRecommend();
          vm.$store.commit('addRecommend', vm.recommend);
          done();
        },1500);
      }
    },
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>
