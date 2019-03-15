import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResults: []
  },
  mutations: {
    replaceSearchResults: (state, searchResults) => {
      state.searchResults = searchResults;
    }
  },
  actions: {},
  getters: {
    currentShow: state => id => {
      return state.searchResults.find(searchResult => searchResult.id === id);
    }
  }
});
