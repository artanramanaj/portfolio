<template>
  <div class="flex flex-col items-center justify-start gap-4 text-white">
    <img src="/img/error.png" alt="" class="w-1/3" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nisl,
      nibh neque ullamcorper velit. Non cursus sodales netus viverra neque mi
      quisque commodo.
    </p>
    <button
      class="p-4 border-primary-green border-[1px] rounded-lg hover:bg-primary-green"
    >
      <router-link to="/">Back to home page</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "error",
};
</script>
