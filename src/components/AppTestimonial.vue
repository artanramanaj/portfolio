<template>
  <carousel :items-to-show="2.5" :wrap-around="true">
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
                description:"lorem ipsum dolor sit amet, consectetur "
            },
            {
                 img:"/img/imgTestimonial.svg",
                name:"Artan 2",
                description:"lorem ipsum dolor sit amet, consectetur"
            },
            {
                 img:"/img/imgTestimonial.svg",
                name:"Artan 3",
                description:"lorem ipsum dolor sit amet, consectetur"
            },
            {
                img:"/img/imgTestimonial.svg",
                name:"Artan 4",
                description:"lorem ipsum dolor sit amet, consectetur"
            },
            {
                img:"/img/imgTestimonial.svg",
                name:"Artan 5",
                description:"lorem ipsum dolor sit amet, consectetur"
            },
            {
                img:"/img/imgTestimonial.svg",
                name:"Artan 6",
                description:"lorem ipsum dolor sit amet, consectetur"
            },
        ]
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