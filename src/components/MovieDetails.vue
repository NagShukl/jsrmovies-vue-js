<template>
  <div class="MovieDetails flex-row">
    <div class="movieTitle col-12" data-test="movieTitle">{{selectedMovie.Title}}</div>
    <div class="moviePoster col-lg-6 col-sm-12 col-md-12" data-test="moviePoster">
      <img :src="selectedMovie.Poster" alt="Movie Poster" />
    </div>
    <div class="moviePlot col-lg-6 col-sm-12 col-md-12 flex-row">
      <div class="col-12" data-test="moviePlot">
        <strong>Movie Plot:</strong>
        {{selectedMovie.Plot}}
      </div>
      <div class="col-12" data-test="movieLanguage">
        <strong>Language:</strong>
        {{selectedMovie.Language}}
      </div>
      <div class="col-12" data-test="movieDirector">
        <strong>Director:</strong>
        {{selectedMovie.Director}}
      </div>
      <div class="col-12" data-test="movieActors">
        <strong>Actors:</strong>
        {{selectedMovie.Actors}}
      </div>
      <div class="col-12" data-test="movieDuration">
        <strong>Duration:</strong>
        {{selectedMovie.Runtime}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: {
    selectedMovie: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.MovieDetails {
  height: 97vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 10px;
  width: 97%;
  .movieTitle {
    font-size: x-large;
  }
  .moviePoster {
    float: right;
    text-align: center;
    img {
      width: 300px;
      height: 450px;
    }
  }
  .moviePlot {
    padding: 1px;
    margin-top: 20px;
  }
}
</style>