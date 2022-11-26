import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CrearItems from "../components/CrearItems.vue";
import EditarItems from "../components/EditarItems.vue";
import ListarItems from "../components/ListarItems.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/crear",
    name: "Crear",
    component: CrearItems,
  },

  {
    path: "/editar/:id",
    name: "Editar",
    component: EditarItems,
  },

  {
    path: "/listar",
    name: "Listar",
    component: ListarItems,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
