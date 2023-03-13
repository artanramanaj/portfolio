<template>
  <!-- <carousel :items-to-show="3" :wrap-around="true" :breakpoints="breakpoints" class="text-white"> -->
  <div class="py-20">
    <h1 class="text-center text-white">Client Testimonial</h1>
    <carousel
      :settings="settings"
      :autoplay="4000"
      :breakpoints="breakpoints"
      :wrap-around="true"
      class="text-white container px-2"
    >
      <slide v-for="(slide, index) in testimonial" :key="index">
        <div
          class="bg-primary-black flex flex-col items-center justify-center min-h-[400px] p-4 break-words rounded-md hover:bg-primary-green cursor-pointer transition-all gap-2"
        >
          <img :src="slide.img" alt="testt" />

          <h2>{{ slide.name }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  data() {
    return {
      testimonial: [
        {
          img: "/img/imgTestimonial.svg",
          name: "Almedin Nasufi",
          description:
            "Thanks to our new website, our online sales have skyrocketed and we've been able to reach a wider audience than ever before. Hiring a web developer was one of the best decisions we've ever made for our business. ",
        },
        {
          img: "/img/imgTestimonial.svg",
          name: "Olt Latifi",
          description:
            "Since you developed my website, my online presence has soared! I couldn't be happier with the results. You truly delivered on your promise - thank you!",
        },
        {
          img: "/img/imgTestimonial.svg",
          name: "Elton Metolli",
          description:
            "The design is eye-catching and user-friendly, and the development is seamless. I couldn't be happier with the end result. Thank you! ",
        },
        {
          img: "/img/imgTestimonial.svg",
          name: "Suad Kodraliu",
          description:
            "You did an amazing job on my website! Not only does it look great, but it's also optimized for search engines. I've seen a huge increase in traffic and leads. Thank you!",
        },
      ], // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up

        1024: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        1366: {
          itemsToShow: 3,
          snapAlign: "center",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style>
ol.carousel__pagination li button:after {
  width: 10px !important;
  height: 10px !important;
  border-radius: 100%;
  background-color: #fff;
}
ol.carousel__pagination li button:hover:after {
  background: #00ce79;
}

button.carousel__next,
button.carousel__prev {
  color: #fff;
}
.carousel__slide ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__pagination-button--active:after {
  background: #00ce79 !important;
}
.carousel__prev:hover,
.carousel__next:hover {
  color: #00ce79 !important;
}
.carousel__prev,
.carousel__next {
  margin: unset !important;
}
</style>
