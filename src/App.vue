<template>
  <MovieApp/>
</template>

<script>
import MovieApp from './components/MovieApp'

export default {
  name: 'App',
  components: {
    MovieApp
  }
}
</script>

<style lang="scss">
body {
  background-color: lightgray;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
