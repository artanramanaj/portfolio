<template>
  <div class="flex flex-col lg:flex-row gap-4 mt-4 text-white">
    <div
      class="min-h-[200px] p-4 bg-[#101010]"
      v-for="(el, index) in position"
      :key="index"
    >
      <h3>{{ el.title }}</h3>
      <p>{{ el.firstDesc }}</p>
      <p>{{ el.secondDesc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "boxAbout",
  data() {
    return {
      position: [
        {
          title: "Frontend Developer",
          firstDesc: "Probit Academy",
          secondDesc:
            "Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consect",
        },
        {
          title: "UI/UX Designer",
          firstDesc: "Probit Academy",
          secondDesc:
            "Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consect",
        },
      ],
    };
  },
};
</script>

