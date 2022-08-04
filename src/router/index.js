import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MovieEdit from "../views/MovieEdit.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/movies", name: "movies", component: MoviesIndex },
  { path: "/movies/new", name: "movies/new", component: MoviesNew },
  { path: "/movies/:id", name: "movies-show", component: MoviesShow },
  { path: "/movies/:id/edit", name: "movie-edit", component: MovieEdit },
  {
    path: "/about",
    name: "about",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
