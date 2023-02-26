<template>
  <div>
    <Accordion :items="items" class="px-4" />
  </div>
</template>

<script>
import Accordion from "./Faqs.vue";

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      items: [
        {
          title: "What is Vue 3?",
          content:
            "Vue 3 is a popular JavaScript framework for building user interfaces.",
          open: false,
        },
        {
          title: "What is Tailwind CSS?",
          content:
            "Tailwind CSS is a popular utility-first CSS framework that provides a set of pre-defined CSS classes to make it easier to build responsive and customizable user interfaces.",
          open: false,
        },
        {
          title: "What is Tailwind CSS?",
          content:
            "Tailwind CSS is a popular utility-first CSS framework that provides a set of pre-defined CSS classes to make it easier to build responsive and customizable user interfaces.",
          open: false,
        },
        // Add more items here
      ],
    };
  },
};
</script>
