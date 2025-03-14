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
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactViews.vue"),
    },
    {
      path: "/mobile",
      name: "mobile",
      component: () => import("../components/MobileMenu.vue"),
    },
    {
      path: "/faqs",
      name: "faqs",
      component: () => import("../views/FaqsViews.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../views/ErrorViews.vue"),
    },
  ],
  linkExactActiveClass: "text-primary-green ",
});

// router.beforeEach((to, from, next) => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
//   next();
// });

export default router;
