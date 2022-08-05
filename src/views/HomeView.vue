<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "DeJaVue",
      movies: [],
      newMovieParams: {},
      currentMovie: {},
      editMovieParams: {},
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
    createMovie: function () {
      axios
        .post("/movies.json", this.newMoviesParams)
        .then((response) => {
          console.log("YAY a new Movie!!", response.data);
          this.movies.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    showMovie: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      this.editMovieParams = movie;
      document.querySelector("/#movie-details").showModal();
    },
    updateMovies: function (movie) {
      axios.patch("/movies/" + movie.id + ".json", this.editMovieParams).then((response) => {
        console.log("Movie Up To Date!!", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("/movies/" + movie.id).then((response) => {
        console.log("Movie Terminated", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      Title:
      <input type="text" v-model="newMovieParams.title" />
      Plot:
      <input type="text" v-model="newMovieParams.plot" />
      <button v-on:click="createMovie()">Let's Make a Movie!</button>
    </div>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <p>{{ movie.title }}</p>
      <p>{{ movie.plot }}</p>
      <button v-on:click="showMovie(movie)">Show Me The Movie</button>
    </div>
    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Information</h1>
        <p>
          Title:
          <input type="text" v-model="editMovieParams.title" />
          Plot:
          <input type="text" v-model="editMovieParams.plot" />
        </p>
        <button>Get Outta Here!</button>
        <button v-on:click="updateMovies(currentMovie)">Update Movie</button>
        <button v-on:click="destroyMovies(currentMovie)">Delete Movie</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>
