import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { consts } from './assets/constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: [],
    searchedValue: '',
    totalResults: 0,
    selectedSearchResult: {},
    currentPage: 1
  },

  mutations: {
    changeSearchResults: (state, searchResults) => {
      state.searchResults = searchResults
    },
    changeTotalResults (state, totalResults) {
      state.totalResults = Number.parseInt(totalResults || 0)
    },
    changeCurrentPage (state, currentPage) {
      state.currentPage = Number.parseInt(currentPage || 1)
    },
    changeSearchValue (state, searchValue) {
      state.searchedValue = searchValue || ''
    },
    changeSelectedSearchResult (state, selectedSearchResult) {
      console.log(selectedSearchResult)
      state.selectedSearchResult = selectedSearchResult
    }
  },

  actions: {
    fetchResults: async ({ commit }, { searchedValue, page = 1 }) => {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchedValue}&page=${page}&apikey=${consts.OMDB_APIKEY}`)
      const searchResults = response.data.Search || []
      const totalResults = response.data.totalResults

      commit('changeTotalResults', totalResults)
      commit('changeSearchValue', searchedValue)
      commit('changeSearchResults', searchResults)
      commit('changeCurrentPage', page)

      return searchResults
    },

    fetchResultByIMDbId: async ({ commit }, movieId) => {
      const response = await axios.get(` http://www.omdbapi.com/?i=${movieId}&apikey=${consts.OMDB_APIKEY}&plot=full`)

      commit('changeSelectedSearchResult', response.data)
    },
    clearSelectedMovie:({ commit }) => {
      commit('changeSelectedSearchResult', {});
    }
  },
 
})
