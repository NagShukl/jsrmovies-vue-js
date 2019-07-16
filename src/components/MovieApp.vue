<template>
  <div class="movieApp d-flex flex-row">
    <SearchContainer />
    <div :class="['movieDetailsPanel flex-column', getDetailsClass]">
      <MovieDetails :selectedMovie="this.$store.state.selectedSearchResult" />
      <div class="hideDetails" @click="clearMovieSelection">X</div>
    </div>
  </div>
</template>

<script>
import SearchContainer from "./SearchContainer";
import MovieDetails from "./MovieDetails";

export default {
  name: "MovieApp",
  components: {
    SearchContainer,
    MovieDetails
  },
  computed: {
    showDetails() {
      return this.$store.state.selectedSearchResult.Title;
    },
    getDetailsClass() {
      return this.$store.state.selectedSearchResult.Title ? "" : "noDisplay";
    }
  },
  methods: {
    clearMovieSelection() {
      this.$store.dispatch("clearSelectedMovie");
    }
  }
};
</script>

<style scoped lang="scss">
.movieApp {
  .movieDetailsPanel {
    width: 100%;
    animation-name: mainPanelSlideIn;
    animation-duration: 2s;

    @media screen and (max-width: 900px) {
      width: 100%;
      position: fixed;
      top: 0;
      height: auto;
      overflow-y: auto;
      opacity: 1;
      z-index: 10;
    }
    .hideDetails {
      // opacity: 0;
      // z-index: -1;
      // @media screen and (max-width: 900px) {
      position: fixed;
      top: 10px;
      opacity: 1;
      z-index: 100;
      right: 0;
      margin-right: 10px;
      background-color: red;
      width: 25px;
      height: 25px;
      text-align: center;
      font-weight: bolder;
      border-radius: 50%;
      // }
      &:hover {
        color: white;
        cursor: pointer;
      }
    }
  }
  .noDisplay {
    display: none;
  }
  .widthFull {
    width: 100%;
  }
  .width30p {
    @media screen and (min-width: 500px) {
      width: 30%;
      transition: width 2s;
    }
    @media screen and (max-width: 900px) {
      opacity: 0;
      z-index: -1;
      transition: opacity 2s;
    }
  }
}
@-webkit-keyframes mainPanelSlideIn {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* Standard syntax */
@keyframes mainPanelSlideIn {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>