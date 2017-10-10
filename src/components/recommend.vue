<template>
  <div class="recommend">
    <section v-for="recommend in recommendlist">
      <div class="list-item">
        <h2 class="title">{{recommend.title}}</h2>
        <ul class="imgs" v-if="recommend.has_image">
          <li class="img-list" v-for="imgItem in recommend.image_list">
            <img :src="imgItem.url" alt="" >
          </li>
        </ul>

      </div>
    </section>
  </div>
</template>

<script>
  var vm;
  import {getRecommend} from "assets/js/recommend.js";

  import {ERR_OK} from 'assets/js/config';
  export default {
    name: 'recommend',
    data() {
      return{
        recommendlist: []
      }
    },
    created() {
      vm = this;
     vm._getRecommend();
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          vm.recommendlist = res.data;
          console.log(res.data);
        })
      },
    }
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  ul{
    list-style: none;
  }
  section{
    width: 96%;
    margin: 0 auto;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);
    .list-item{
      padding: 1rem 0;
      h2{
        font-size: 1.8rem;
        font-weight: normal;
      }
      .imgs{
        width: 100%;
        overflow: hidden;
        .img-list{
          float: left;
          width: 33.333%;
          img{
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
          }
        }
      }
    }
  }
</style>
