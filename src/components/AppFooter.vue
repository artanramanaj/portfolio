<template>
  <div class="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-white px-2 py-20">
    <div class="flex flex-col gap-4">
      <h4>AR</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="flex gap-4">
        <img src="/img/instagram.svg" alt="" class="w-[24px]" />
        <img src="/img/github.svg" alt="" class="w-[24px]" />
        <img src="/img/linkedin.svg" alt="" class="w-[24px]" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4>Company</h4>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <router-link to="/">Home</router-link>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h4>Resources</h4>
      <ul class="flex flex-col gap-2 cursor-pointer">
        <li>Blog</li>
        <li>FAQ-s</li>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <h4>Contact</h4>
        <div>
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <img src="/img/envelope.png" alt="email">
                <p> artan.rramanaj@gmail.com</p>
            </div>
            <div class="flex gap-4">
              <img src="/img/telephone.png" alt="phone">
                <p>+383 49 565 644</p>
            </div>
            <div class="flex gap-4">
              <img src="img/location.png" alt="location">
                <p>Pristina, Kosovo</p>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>