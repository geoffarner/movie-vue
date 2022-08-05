import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MovieEdit from "../views/MovieEdit.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/movies", name: "movies", component: MoviesIndex },
  { path: "/movies/new", name: "movies/new", component: MoviesNew },
  { path: "/movies/:id", name: "movies-show", component: MoviesShow },
  { path: "/movies/:id/edit", name: "movie-edit", component: MovieEdit },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },

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
