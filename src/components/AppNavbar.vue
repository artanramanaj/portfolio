<template>
  <div
    class="container flex justify-between items-center min-h-[100px] px-2 z-[1111] bg-[#181818]"
  >
    <router-link to="/">
      <img src="/img/AR.svg" alt="logo" />
    </router-link>
    <ul class="text-white hidden md:flex">
      <li class="py-2 px-4">
        <router-link to="/">Home</router-link>
      </li>
      <li class="py-2 px-4">
        <router-link to="/about">About Me</router-link>
      </li>
      <li class="py-2 px-4">
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
    
      <li class="py-2 px-4">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li class="py-2 px-4">
        <router-link to="/faqs">FAQ-s</router-link>
      </li>
    </ul>
    <!-- <img
      src="/img/menu.png"
      alt=""
      class="flex md:hidden"
      @close-modal="this.showMenu = !this.showMenu"
    /> -->
    <img
      src="/img/menu.png"
      alt=""
      class="flex z-[1111] md:hidden"
      @click="this.showMenu = !this.showMenu"
    />
  </div>

  <MobileMenu
    v-if="showMenu"
    @hideModal="this.showMenu = !this.showMenu"
    :testing="showMenu"
  />
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
export default {
  name: "navbarApp",
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    MobileMenu,
  },
};
</script>
