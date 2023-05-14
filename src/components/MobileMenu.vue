<template>
  <div
    class="fixed top-0 min-w-full min-h-screen bg-black z-[1111] px-4 py-2 md:hidden"
  >
    <img
      src="/img/cancel.png"
      alt="cancel"
      class="absolute z-[9999] mt-2 right-5"
      @click="checkingModal"
    />

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
      <li class="py-2 px-4">
        <router-link to="/faqs">FAQs</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mobileMenu",
  props: ["testing"],
  emits: ["hideModal"],
  methods: {
    checkingModal() {
      this.$emit("hideModal");
      console.log("clicked");
    },
  },
};
</script>
