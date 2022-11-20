import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingleImage from "../views/SingleImage.vue";
import CreateUser from "../views/CreateUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/single-image/:pk/:image/",
      name: "singleImage",
      component: SingleImage,
    },
    {
      path: "/createuser",
      name: "createUser",
      component: CreateUser,
    },
  ],
});

export default router;
