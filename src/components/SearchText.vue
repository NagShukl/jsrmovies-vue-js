<template>
  <div class="search-container">
    <v-text-field
      placeholder="Search Movie/Series..."
      color="blue"
      :autofocus="true"
      append-icon="search"
      v-model="searchedValue"
      @click:append="onSearch"
      @keyup.enter="onSearch"
      :loading="isSearching"
      hint="at least 3 chars..."
    ></v-text-field>
  </div>
</template>

<script>

export default {
  name: 'SearchText',
  data: function () {
    return {
      searchedValue: '',
      isSearching: false
    }
  },
  methods: {
    onSearch: async function () {
      if (this.searchedValue.length >= 3) {
        this.fetchMoviesBySearchValue(this.searchedValue)
      }
    },

    fetchMoviesBySearchValue: async function (searchedValue) {
      this.isSearching = true
      await this.$store.dispatch('fetchResults', { searchedValue })
      this.isSearching = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
