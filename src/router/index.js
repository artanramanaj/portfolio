import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeViews.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutViews.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/PortfolioViews.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesViews.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactViews.vue"),
    },
    {
      path: "/mobile",
      name: "mobile",
      component: () => import("../components/MobileMenu.vue"),
    },
  ],
});

export default router;
