<template>
  <div class="container flex justify-between items-center min-h-[100px] px-2">
    <img src="/img/AR.svg" alt="" />
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
        <router-link to="/services">Services </router-link>
      </li>
      <li class="py-2 px-4">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li
        class="
          bg-primary-green
          py-2
          px-4
          rounded-lg
          cursor-pointer
          hover:bg-primary-grey
        "
      >
        Hire Me
      </li>
    </ul>
    <img src="/img/menu.png" alt="" class="flex md:hidden" />
  </div>
</template>

<script>
export default {
  name: "nav",
};
</script>