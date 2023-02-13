<template>
  <div
    class="fixed top-0 min-w-full min-h-screen bg-black z-[1111] px-4 py-2 md:hidden"
  >
    <img src="/img/cancel.png" alt="cancel" class="absolute mt-2 right-5" />

    <ul class="text-white flex flex-col">
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
        <router-link to="/services">Services </router-link>
      </li>
      <li class="py-2 px-4">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li
        class="bg-primary-green py-2 px-4 rounded-lg cursor-pointer hover:bg-primary-grey"
      >
        Hire Me
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mobileMenu",
  props: ["testing"],
};
</script>
