<template>
  <!-- <carousel :items-to-show="3" :wrap-around="true" :breakpoints="breakpoints" class="text-white"> -->
  <carousel :settings="settings" :autoplay="2000" :breakpoints="breakpoints" :wrap-around="true" class="text-white">
    <slide v-for="(slide,index) in testimonial" :key="index">
        <div class="bg-primary-green flex flex-col items-center justify-start  min-h-[400px] p-4 break-words rounded-md">
            <p>{{slide.description}}</p>
               <img :src="slide.img" alt="testt" />
            <h1>{{slide.name}}</h1>
         </div>   
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  data() {
    return {
        testimonial:[ 
            {
                img:"/img/imgTestimonial.svg",
                name:"Artan 1",
                description:"lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur  "
            },
            {
                 img:"/img/imgTestimonial.svg",
                name:"Artan 2",
                description:"lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur "
            },
            {
                 img:"/img/imgTestimonial.svg",
                name:"Artan 3",
                description:"lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur "
            },
            {
                img:"/img/imgTestimonial.svg",
                name:"Artan 4",
                description:"lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur "
            },
            {
                img:"/img/imgTestimonial.svg",
                name:"Artan 5",
                description:"lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur "
            },
            {
                img:"/img/imgTestimonial.svg",
                name:"Artan 6",
                description:"lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur "
            },
        ],   // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      400: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
   
      1024: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      1366: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      
    },
        
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style>
ol.carousel__pagination li button:after {
    width: 10px !important;
    height: 10px !important;
    border-radius: 100%;
    background-color: #fff;
}
ol.carousel__pagination li button:hover:after {
  background: #00CE79;
}
 .carousel__pagination-button .carousel__pagination-button--active:after {
  background-color:red !important;
}
button.carousel__next, button.carousel__prev {
    color: #fff;
}
.carousel__slide ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

</style>