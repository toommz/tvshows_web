import Vue from "vue";
import Vuex from "vuex";

import { search, fetchShow } from "@/utils/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    searchTerm: "",
    searchResults: []
  },
  mutations: {
    updateSearchTerm: (state, searchTerm) => {
      state.searchTerm = searchTerm;
    },
    toggleIsLoading: state => {
      state.isLoading = !state.isLoading;
    },
    replaceSearchResults: (state, searchResults) => {
      state.searchResults = searchResults;
    }
  },
  actions: {
    async onSearchShowSubmit({ commit, state }) {
      commit("toggleIsLoading");
      const searchResults = await search(state.searchTerm);

      commit("replaceSearchResults", searchResults);
      commit("toggleIsLoading");
    },
    async getCurrentShow({ getters }, id) {
      return getters.currentShow(id) || (await fetchShow(id));
    }
  },
  getters: {
    currentShow: state => id => {
      return state.searchResults.find(searchResult => searchResult.id === id);
    }
  }
});
