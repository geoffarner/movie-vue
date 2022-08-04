<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id + ".json").then((response) => {
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="movies-show">
    <div class="container">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.year }}</p>
      <p>{{ movie.plot }}</p>
      <p>{{ movie.director }}</p>
      <router-link to="/movies">Back to all movies</router-link>
      |
      <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit this movies</router-link>
    </div>
  </div>
</template>
