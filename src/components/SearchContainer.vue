<template>
<div :class="['searchPanel flex-column', getAppClass]">
<div class="resultContainer">
<SearchText/>
<MovieList :itemsList="searchResults" v-if="totalResults > 0"/>
<PagingBar :totalResults="totalResults" v-if="totalResults > 0"/>
</div>
</div>
</template>

<script>
import SearchText from './SearchText';
import MovieList from './MovieList';
import PagingBar from './PagingBar';
export default {
  name: 'SearchContainer',
  components: {
      SearchText,
      MovieList,
      PagingBar
  },
  computed: {
    searchResults: function () {
      return this.$store.state.searchResults;
    },
    totalResults: function () {
      return this.$store.state.totalResults;
    },
      getAppClass() {
          return this.$store.state.selectedSearchResult.Title?'width30p':'widthFull';
      },
  }
}
</script>

<style scoped lang="scss">

.searchPanel {
                border-right: 1px solid darkgray;
                min-width: 30%;
                transition: width 2s;
                @media screen and (max-width: 900px) {
                   width: 100%;
                   position: fixed;
                   top: 0;
                   height: 100%;
                   transition: opacity 2s;
                }
                
            }
.resultContainer {
    margin-left: 5px;
    margin-right: 5px;
}

</style>