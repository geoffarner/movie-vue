<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "DeJaVue",
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies.json").then((response) => {
        this.movies = response.data;
        console.log("All Movies:", this.movies);
      });
    },
  },
};
</script>
<template>
  <div
    v-for="movie in movies"
    v-bind:key="movie.id"
    v-on:click="currentMovie = movie"
    v-bind:class="{ selected: movie === currentMovie }"
  >
    <p>{{ movie.year }}</p>
    <p>{{ movie.plot }}</p>
    <p>{{ movie.director }}</p>
  </div>
</template>

<style></style>
