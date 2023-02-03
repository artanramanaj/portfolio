<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white py-20" >
    <div class="flex flex-col gap-4">
      <h3>AR</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="flex gap-4">
        <img src="/img/instagram.svg" alt="" class="w-[24px]"/>
        <img src="/img/github.svg" alt=""  class="w-[24px]" />
        <img src="/img/linkedin.svg" alt="" class="w-[24px]" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h3>Company</h3>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h3>Resources</h3>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <li>Blog</li>
        <li>FAQ-s</li>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h3>Join Our Newsletter</h3>
      <label for="" class="relative">
      <input type="text" class="bg-transparent border-2 rounded-md " />
        <button class="">subscribe</button>
      </label>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, in nulla
        at at faucibus.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>