import { defineStore } from "pinia";

export const servicesStore = defineStore("allServicesStore", {
  state: () => ({
    allServices: [
      {
        img: "/img/whiteTag.svg",
        name: "Web Development",
        description:
          "With years of experience as a web developer, I specialize in creating high-quality, responsive, and visually stunning websites that offer a seamless user experience. From concept to launch, I work with you to deliver websites that align with your brand goals and attract your target audience.",
      },
      {
        img: "/img/webdesign.png",
        name: "UI/UX Design",
        description:
          "I create visually appealing and intuitive interfaces that provide users with a seamless digital experience. From wireframes to final designs, I focus on delivering interfaces that are both aesthetically pleasing and user-friendly, all while aligning with your brand's identity and goals.",
      },
      {
        img: "/img/seo.png",
        name: "SEO",
        description:
          "I optimize websites to increase organic traffic and improve search engine rankings. I conduct thorough research and implement strategies such as keyword research, on-page optimization, and link building to improve your website's visibility and drive more qualified leads to your business.",
      },
      {
        img: "/img/responsive.png",
        name: "Responsive",
        description:
          "I create websites that adapt to any device, providing a seamless user experience across desktop, tablet, and mobile. With a mobile-first approach, I design and develop websites that are visually appealing, easy to use, and optimized for all screen sizes, resulting in increased engagement and conversion rates.",
      },
      {
        img: "/img/wordpresslogo.png",
        name: "WordPress",
        description:
          "I offer a full range of WordPress development services, including website design, customization, and ongoing maintenance to ensure that your website is up-to-date and secure. Whether you need a new website or want to enhance your existing one, I work with you to deliver a website that exceeds your expectations and provides an exceptional user experience.",
      },
      {
        img: "/img/elementor.png",
        name: "Elementor",
        description:
          "My expertise in Elementor allows me to create custom WordPress websites that are optimized for search engines and provide an outstanding user experience. Whether you need a new website or want to revamp an existing one, I can help you develop a solution that aligns with your brand goals and meets the needs of your target audience.",
      },
      {
        img: "/img/woocommerce.png",
        name: "WooCommerce",
        description:
          "With my expertise in WooCommerce, I can create custom online stores that are optimized for search engines, mobile-responsive, and user-friendly. I provide a full range of WooCommerce development services, including store design, customization, and integration of third-party tools and payment gateways.",
      },
      {
        img: "/img/shopify.png",
        name: "Shopify",
        description:
          "With my commitment to quality and attention to detail, you can trust that your Shopify website is in good hands. Whether you need a new online store or want to enhance your existing one, I work with you every step of the way to create a website that exceeds your expectations and provides an exceptional user experience.",
      },
    ],
    projects: [
      {
        name: "uni-project/2024",
        img: "/img/project1.svg",
        description:
          "this is website is developed using vue3 technologies and tailwind",
        tech: "vue",
      },
      {
        name: "switch",
        img: "/img/project2.svg",
        description:
          "this is website is developed using vue3 technologies and tailwind",
        tech: "vue",
      },
      {
        name: "planet-verify",
        img: "/img/project3.svg",
        description:
          "this is website is developed using vue3 technologies and tailwind",
        tech: "wordpress",
      },
      {
        name: "Elisabeth",
        img: "/img/project4.svg",
        description:
          "this is website is developed using Wordpress cms and elementor page builder",
        tech: "wordpress",
      },
      {
        name: "Elisabeth",
        img: "/img/project1.svg",
        tech: "react",
      },
      {
        name: "Elisabeth",
        img: "/img/project2.svg",
        tech: "javascript",
      },
      {
        name: "Elisabeth",
        img: "/img/project3.svg",
        tech: "wordpress",
      },
      {
        name: "Elisabeth",
        img: "/img/project4.svg",
        tech: "vue",
      },
      {
        name: "Elisabeth",
        img: "/img/project1.svg",
        tech: "react",
      },
    ],
  }),
});
