<template>
  <div class="movieList">
    <ul v-for="searchResult in itemsList" :key="searchResult.imdbID" class="movieListContainer">
      <MovieCard :item="searchResult" />
    </ul>
  </div>
</template>

<script>
import MovieCard from './MovieCard'
export default {
  name: 'MovieList',
  components: {
      MovieCard
  },
  data () {
    return {
      currentPage: 1,
      isOpenDialog: false
    }
  },
  props: {
    itemsList: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalResults () {
      return this.$store.state.totalResults
    },
    numOfPages () {
      if (this.totalResults > 0 && this.totalResults % 10 === 0) {
        return this.totalResults / 10
      } else {
        return Math.floor(this.totalResults / 10) + 1
      }
    },
    selectedSearchResult () {
      return this.$store.state.selectedSearchResult
    }
  }
}
</script>

<style lang="scss">
ul {
  margin-left: -2em;
  list-style: none;
  margin-top: 5px;
  margin-bottom: 10px;
}
.movieList {
  height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>