<template>
  <div
    class="container flex flex-col items-center justify-start gap-4 text-white text-center"
  >
    <img src="/img/error.png" alt="" class="w-1/3" />
    <p>
      I'm sorry, the page you're looking for could not be found.It's possible
      that the page has been deleted, moved, or renamed. You can try searching
      for the page using the search bar above, or navigate to my homepage to
      find what you're looking for.
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
