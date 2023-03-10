import { defineStore } from "pinia";

export const servicesStore = defineStore("allServicesStore", {
  state: () => ({
    allServices: [
      {
        img: "/img/whiteTag.svg",
        name: "service 1",
        description: "lorem ipsum 1 dummy",
      },
      {
        img: "/img/webdesign.png",
        name: "service 2",
        description: "lorem ipsum 2 dummy",
      },
      {
        img: "/img/seo.png",
        name: "service 3",
        description: "lorem ipsum 3 dummy",
      },
      {
        img: "/img/responsive.png",
        name: "service 4",
        description: "lorem ipsum 4 dummy",
      }
    ],
    projects: [
      {
        name: "uni-project/2024",
        img: "/img/project1.svg",
        tech: "vue",
      },
      {
        name: "switch",
        img: "/img/project2.svg",
        tech: "vue",
      },
      {
        name: "planet-verify",
        img: "/img/project3.svg",
        tech: "wordpress",
      },
      {
        name: "Elisabeth",
        img: "/img/project4.svg",
        tech: "wordpress",
      },
      {

        img: "/img/project1.svg",
        tech: "react",
      },
      {
        img: "/img/project2.svg",
        tech: "javascript",
      },
      {
        img: "/img/project3.svg",
        tech: "wordpress",
      },
      {
        img: "/img/project4.svg",
        tech: "vue",
      },
      {
        img: "/img/project1.svg",
        tech: "react",
      },
    ],
  }),
});
