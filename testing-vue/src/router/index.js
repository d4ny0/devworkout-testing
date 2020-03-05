import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/counter",
    name: "Counter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CounterPage.vue")
  },
  {
    path: "/fetch-example",
    name: "Fetch Example",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FetchExamplePage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
