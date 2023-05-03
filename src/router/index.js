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
      path: "/portfolio/deingesundheitscoach",
      name: "deingesundheitscoach",
      component: () =>
        import("../components/Portfolio/Projects/Deingesundheitscoach.vue"),
    },
    {
      path: "/portfolio/eventveranstalter",
      name: "eventveranstalter",
      component: () =>
        import("../components/Portfolio/Projects/Eventveranstalter.vue"),
    },
    {
      path: "/portfolio/finnieconsulting",
      name: "finnieconsulting",
      component: () =>
        import("../components/Portfolio/Projects/FinnieConsulting.vue"),
    },
    {
      path: "/portfolio/pgs",
      name: "pgs",
      component: () => import("../components/Portfolio/Projects/Pgs.vue"),
    },
    {
      path: "/portfolio/planetverify",
      name: "planetverify",
      component: () =>
        import("../components/Portfolio/Projects/PlanetVerify.vue"),
    },
    {
      path: "/portfolio/projekt2024",
      name: "projekt2024",
      component: () =>
        import("../components/Portfolio/Projects/Projekt2024.vue"),
    },
    {
      path: "/portfolio/switch",
      name: "switch",
      component: () => import("../components/Portfolio/Projects/Switch.vue"),
    },
    {
      path: "/portfolio/zahnarzt",
      name: "zahnarzt",
      component: () => import("../components/Portfolio/Projects/Zahnarzt.vue"),
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
