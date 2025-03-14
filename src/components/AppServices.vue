<template>
  <div
    class="container flex flex-col justify-center items-center gap-4 text-white px-2 py-20"
  >
    <p class="text-primary-green">skills</p>
    <h1>Skillset</h1>
    <div
      class="w-full flex flex-col md:flex-row flex-wrap gap-4 justify-center md:gap-8"
    >
      <div
        class="bg-primary-black flex flex-col gap-4 justify-center items-center px-4 py-8 rounded-md w-full md:w-[30%] min-h-[400px] hover:bg-primary-green hover:transition hover:ease-in-out hover:delay-150"
        v-for="(el, index) in showSkills"
        :key="index"
      >
        <img :src="el.img" alt="logo" />
        <h3>{{ el.name }}</h3>
        <p class="text-center">{{ el.description }}</p>
      </div>
    </div>
  
  

  </div>
</template>

<script>
import { servicesStore } from "../stores/services.js";

export default {
  name: "services",
  data() {
    return {
      skills: servicesStore(),
      showSkills: [],
      skillNumber: 3,
      btnValue: true,
    };
  },
  mounted() {
    this.loadSkills();
    this.btnValue = true;
  },
  methods: {
    loadSkills() {
      this.showSkills = this.skills.allServices.slice(0, this.skillNumber);
      this.skillNumber = this.skills.allServices.length;
      this.btnValue = false;
    },

  },
};
</script>
