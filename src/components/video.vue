<template>
  <div class="container">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="videoScroll">
      <div class="group" v-for="video in videoList">
        <section v-for="videoItem in video">
          <div class="list-item">
            <h3 class="video-title">{{videoItem.title}}</h3>
            <div class="videoImg">
              <img :src="videoItem.large_image_url" :alt="videoItem.title">
            </div>
            <span class="span-btn iconfont icon-bofang"></span>
            <div class="item-info">
              <span>{{videoItem.media_name}}</span>
            </div>
          </div>
        </section>
      </div>
    </scroller>


  </div>
</template>
<script>
  var vm ;
  import {getVideo} from "assets/js/getImfor.js";
  import VueScroller from "vue-scroller";
  import Vue from "vue";
  Vue.use(VueScroller);
  export default {
    name: 'video',
    data() {
      return {
        video:[],
        noData:''
      }
    },
    computed:{
      videoList() {
        return vm.$store.state.videoList
      }
    },
    created() {
      vm = this;
      vm._getVideo();
    },
    mounted() {
      if(vm.videoList.length === 0) {
        vm.$store.commit("addVideo",vm.video);
      }
    },
    methods: {
      _getVideo() {
        getVideo().then((res) => {
          vm.video = res.data;
        })
      },

      infinite(done) {
        setTimeout( () => {
          vm._getVideo();
          if(vm.video.length === 0) {
            vm.noData = "没有更多数据";
          }else {
            vm.$store.commit("addVideo",vm.video);
          }
          vm.$refs.videoScroll.resize();
          done();
        },1500)
      },
      refresh(done) {
        setTimeout( () => {
          vm._getVideo();
          vm.$store.commit("addVideo", vm.video);
          done();
        },1500)
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~assets/less/list.less";
</style>


