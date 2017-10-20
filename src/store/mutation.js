import Vue from 'Vue'

const mutations = {
  addRecommend(state, recommend) {
    state.recommendList.unshift(recommend)
  },

  addHot(state, hot) {
    state.hotList.unshift(hot)
  },

  addVideo(state, video) {
    state.videoList.unshift(video)
  },

  addSociety(state, society) {
    state.societyList.unshift(society)
  },

  addEntertainment(state, entertainment) {
    state.entertainmentList.unshift(entertainment)
  },

  addMilitary(state, military) {
    state.militaryList.unshift(military)
  }
};

export default mutations
