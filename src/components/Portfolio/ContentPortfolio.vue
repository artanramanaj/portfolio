<template>
  <div class="container py-20">
    <div
      class="flex flex-col flex-wrap justify-center md:flex-row gap-4 px-4 md:px-0"
    >
      <button
        class="bg-primary-green rounded text-white px-4 py-2 md:w-[10%]"
        @click="allProjects('all')"
        :class="{ ' bg-primary-grey': isActive === 'all' }"
      >
        All
      </button>
      <button
        class="bg-primary-green rounded text-white px-4 py-2 md:w-[10%]"
        @click="filterProjects('vue')"
        :class="isActive == 'vue' ? 'bg-primary-grey' : ''"
      >
        Vue
      </button>

      <button
        class="bg-primary-green rounded text-white px-4 py-2 md:w-[10%]"
        @click="filterProjects('javascript')"
        :class="{ ' bg-primary-grey': isActive === 'javascript' }"
      >
        Javascript
      </button>
      <button
        class="bg-primary-green rounded text-white px-4 py-2 md:w-[10%]"
        @click="filterProjects('wordpress')"
        :class="{ ' bg-primary-grey': isActive === 'wordpress' }"
      >
        WordPress
      </button>
    </div>
    <div class="flex flex-col justify-center gap-8 flex-wrap pt-20 md:flex-row">
      <div
        class="flex flex-col items-center w-full md:w-[30%] lg:w-[20%] p-4 bg-primary-black rounded-lg hover:bg-primary-grey hover:cursor-pointer hover:transition"
        v-for="(el, index) in filteredPorjects"
        :key="index"
      >
        <router-link :to="el.url">
          <img :src="el.img" class="w-[120px] h-[50px]" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { servicesStore } from "../../stores/services.js";

export default {
  name: "contentPortfolio",
  data() {
    return {
      projects: servicesStore(),
      filteredPorjects: [],
      isActive: "",
    };
  },
  mounted() {
    this.allProjects();
  },
  methods: {
    allProjects(tech1) {
      this.filteredPorjects = this.projects.projects;
      this.isActive = tech1;
    },
    filterProjects(tech) {
      this.filteredPorjects = this.projects.projects.filter(
        (el) => el.tech == tech
      );
      this.isActive = tech;
    },
  },
};
</script>
