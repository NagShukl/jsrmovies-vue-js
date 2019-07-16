<template>
  <li
    :key="item.imdbID"
    @click="updateSelectedItem(item.imdbID)"
    class="d-flex flex-row"
    data-test="MovieCard"
  >
    <div class="flex-column">
      <img :src="item.Poster" alt="Movie Poster" data-test="MoviePoster" />
    </div>
    <div class="p-1 flex-column cardTextCol">
      <div class="flex-row" data-test="MovieTitle">{{item.Title}}</div>
      <div class="flex-row rightAlign" data-test="MovieYear">{{item.Year}}</div>
      <div :class="[getCurrentSelectedIcon(item.imdbID)]">
        <img
          width="25px;"
          height="25px;"
          alt="Movie Poster"
          src="https://image.flaticon.com/icons/png/128/660/660463.png"
          data-test="SelectedMovieIcon"
        />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    async updateSelectedItem(id) {
      await this.$store.dispatch("fetchResultByIMDbId", id);
    },
    getCurrentSelectedIcon(id) {
      return this.$store.state.selectedSearchResult.imdbID === id
        ? "selectedIcon"
        : "noDisplay";
    }
  }
};
</script>

<style scoped lang="scss">
$movieCardBackColor: rgb(236, 240, 243);
$movieCardFontColor: rgb(27, 29, 31);
$movieCardHoverBackColor: rgb(61, 62, 63);
$movieCardHoverFontColor: rgb(231, 235, 238);

li {
  background-color: $movieCardBackColor;
  color: $movieCardFontColor;
  margin: 3px;
  border-radius: 10px;
  .selectedIcon {
    float: right;
    position: relative;
    margin-top: -50px;
    img {
      width: 25px;
      height: 25px;
    }
  }
  div > img {
    width: 40px;
    height: 45px;
    margin-left: 5px;
    margin-top: 5px;
  }
  .p-1 {
    padding: 0.45rem !important;
  }
  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  .cardTextCol {
    width: 100%;
    font-weight: bold;
    margin-right: 10px;
    .rightAlign {
      text-align: right;
      font-size: 1.2rem;
      font-weight: lighter;
    }
  }
  &:hover {
    background-color: $movieCardHoverBackColor;
    color: $movieCardHoverFontColor;
    cursor: pointer;
  }
}
.noDisplay {
  display: none;
}
</style>