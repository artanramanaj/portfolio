<template>
  <div class="container min-h-[100vh] flex flex-col justify-center">
    <h1 class="text-white text-center">Contact</h1>
    <div class="flex flex-col md:flex-row justify-center">
      <ContactContent class="w-1/2" />
      <img src="/img/formEnvelope.png" alt="" />
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

