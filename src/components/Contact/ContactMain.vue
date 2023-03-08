<template>
  <div class="container min-h-[100vh] flex flex-col justify-evenly">
    <h1 class="text-white text-center">Get in touch with me</h1>
    <div
      class="flex flex-col gap-4 items-center lg:gap-0 lg:flex-row justify-center mt-12"
    >
      <ContactContent class="w-2/3 lg:w-1/2" />
      <img
        src="/img/formEnvelope.png"
        alt=""
        class="w-1/2 lg:w-[400px] lg:h-[400px]"
      />
    </div>
  </div>
</template>

<script>
import ContactContent from "./ContactContent.vue";
export default {
  name: "contactmain",
  components: {
    ContactContent,
  },
};
</script>
