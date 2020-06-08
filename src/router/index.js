import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true, title: "Esportives 2020" }
  },
  {
    path: '/nou',
    name: 'Nou Participant',
    component: () => import("../views/NouParticipant.vue"),
    meta: { requiresAuth: true, title: "Esportives 2020 - Nou Participant" }
  },
  {
    path: '/llistat',
    name: 'Llistat Participants',
    component: () => import("../views/Llistat.vue"),
    meta: { requiresAuth: true, title: "Esportives 2020 - Llistat Participants" }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue"),
    meta: { title: "Esportives 2020 - Accedeix" }

  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // console.log(
  //   to.fullPath,
  //   "authenticated: " + store.state.isAuthenticated
  // );
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !store.state.isAuthenticated
  ) {
    // console.log("redirected to login");
    next("/login");
  } else if (to.fullPath === "/login" && store.state.isAuthenticated) {
    next("dashboard");
  } else next();
});

export default router;
