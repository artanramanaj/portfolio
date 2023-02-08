<template>
  <div
    class="
      w-full
      flex flex-col
      md:flex-row
      flex-wrap
      gap-4
      justify-between
      my-4
      px-2
      py-20
      container
      md:gap-8
    "
  >
    <div
      class="
        bg-primary-black
        flex flex-col
        gap-4
        justify-center
        items-center
        px-4
        py-8
        rounded-md
        w-full
        md:w-[23%]
        min-h-[400px]
        cursor-pointer
        text-white
        hover:bg-primary-green
      "
      v-for="(el, index) in services.allServices"
      :key="index"
    >
      <img :src="el.img" alt="logo" />
      <h3>{{ el.name }}</h3>
      <p>{{ el.description }}</p>
    </div>
  </div>
</template>

<script>
import { servicesStore } from "../../stores/services.js";
export default {
  name: "mainServices",
  data() {
    return {
      services: servicesStore(),
    };
  },
  mounted() {
    console.log("this service", this.services.allServices);
  },
};
</script>