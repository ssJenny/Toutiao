import Vue from 'Vue'

const mutations = {
  addRecommend(state, recommend) {
    state.recommendList.unshift(recommend)
  },

  addhot(state, hot) {
    Vue.set(state.hotList, state.hotList.length, hot)
  },

  addVideo(state, video) {
    Vue.set(state.videoList, state.videoList.length, video)
  },

  addSociety(state, society) {
    Vue.set(state.societyList, state.societyList.length, society)
  },

  addEntertainment(state, entertainment) {
    Vue.set(state.entertainmentList, state.entertainmentList.length, entertainment)
  },

  addMilitary(state, military) {
    Vue.set(state.militaryList, state.militaryList.length, military)
  }
};

export default mutations
