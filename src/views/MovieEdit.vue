<script>
import axios from "axios";

export default {
  data: function () {
    return {
      editMovieParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id + ".json").then((response) => {
      this.editMovieParams = response.data;
    });
  },
  methods: {
    updateMovie: function () {
      axios
        .patch("/movies/" + this.$route.params.id + ".json", this.editMovieParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/movies");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="movies-edit">
    <form v-on:submit.prevent="updateMovie()">
      <h1>edit Movie</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editMovieParams.title" />
      </div>
      <div>
        <label>Year:</label>
        <input type="text" v-model="editMovieParams.year" />
      </div>
      <div>
        <label>Plot:</label>
        <input type="text" v-model="editMovieParams.plot" />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" v-model="editMovieParams.director" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
