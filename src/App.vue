<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/movies">All Movies</router-link>
    |
    <router-link to="/movies/new">New Movie</router-link>
    |
    <router-link to="/movies/:id">Individual Movie</router-link>
    |
    <router-link to="/movies/:id/edit">Edit Movie</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
