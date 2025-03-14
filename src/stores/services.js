import { defineStore } from "pinia";

export const servicesStore = defineStore("allServicesStore", {
  state: () => ({
    allServices: [
      {
        img: "/img/webdesign.png",
        name: "Frontend Development",
        description:
          "With years of experience as a web developer, I specialize in creating high-quality, responsive, and visually stunning websites that offer a seamless user experience. From concept to launch, I work with you to deliver websites that align with your brand goals and attract your target audience.",
      },
      {
        img: "/img/whiteTag.svg",
        name: "Backend Development",
        description:
          "As a backend developer, I specialize in designing and managing databases, implementing efficient server-side logic, and building  APIs to ensure seamless communication between systems and applications.",
      },

      {
        img: "/img/wordpresslogo.png",
        name: "WordPress/WooCommerce",
        description:
        "Experience in building and customizing websites using WordPress, WooCommerce, and Elementor page builder. Creating responsive, fast, and SEO-friendly websites, from business sites to eCommerce stores.",
      }
    ],
    projects: [
      {
        name: "SalesHax",
        img: "/img/sales-hax.png",
        tech: "wordpress",
        url: "https://home-5015059331.app-ionos.space/",
      },
      {
        name: "Projekt-2024",
        img: "/img/projekt2024.svg",
        tech: "vue",
        url: "https://home-5012198735.app-ionos.space/",
      },
      {
        name: "switch",
        img: "/img/switch.svg",
        tech: "vue",
        url: "https://home-5013069522.app-ionos.space/login",
      },

   

      {
        name: "planet-verify",
        img: "/img/planetverify.svg",
        tech: "wordpress",
        url: "https://planetverify.com/",
      },
      {
        name: "FinnieConsulting",
        img: "/img/finnieconsulting.png",
        tech: "wordpress",
        url: "https://finnie.consulting/",
      },
    
      
      
      {
        name: "bluepet",
        img: "/img/bluepet.png",
        tech: "shopify",
        url: "https://bluepet.de/",
      },
    ],
  }),
});
