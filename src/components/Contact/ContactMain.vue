<template>
  <div class="container min-h-[100vh] flex flex-col justify-center">
    <h1 class="text-white text-center">Get in touch !</h1>
    <p class="text-white text-center px-2 md:px-[20%]">Feel free to reach out! Whether you have a project in mind, a question, or just want to connect, I'm here to help. If you're looking to hire a skilled developer, let's start a conversation and explore how we can collaborate on your next project.</p>
    <div
      class="flex flex-col gap-8 items-center lg:gap-0 lg:flex-row justify-center mt-12"
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
