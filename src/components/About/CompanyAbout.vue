<template>
  <div class="flex">
    <div
      class="
        text-white
        flex flex-col
        gap-2
        mt-4
        p-8
        rounded-md
        border-2 border-primary-green
        bg-[#101010]
        w-1/2
      "
      v-for="(el, index) in companyData"
      :key="index"
      @click="el.tab"
    >
      <h3>{{ el.name }}</h3>
      <h4>{{ el.position }}</h4>
      <p>{{ el.time }}</p>
      <div class="flex gap-4">
        <p>{{ el.from }}</p>
        <p>{{ el.to }}</p>
      </div>
    </div>

    <div class="  w-1/2">
      <div v-if="tab == 1">
        <img src="" alt="test1" />
        <h1>testing</h1>
      </div>

      <div v-if="tab == 2">
        <img src="" alt="test2" />
        <h1>testing</h1>
      </div>

      <div v-if="tab == 3">
        <img src="" alt="test3" />
        <h1>testing</h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "companyAbout",
  data() {
    return {
      tab: 1,
      companyData: [
        {
          name: "tactica",
          description: "lorem ipsum lorem ipsum",
          position: "WordPress Developer & UI/UX Designer",
          time: "6 months",
          from: "01.05.2021",
          to: "30.10.2021",
          tab: this.activeTabOne,
        },
        {
          name: "MeshCOM",
          description: "lorem ipsum lorem ipsum",
          position: "Frontend Developer",
          time: "12 months",
          from: "01.11.2021",
          to: "01.10.2022",
          tab: this.activeTabTwo,
        },
        {
          name: "FinnieConsulting",
          description: "lorem ipsum lorem ipsum",
          position: "WordPress Developer",
          time: "6 months",
          from: "01.11.2021",
          to: "currently",
          tab: this.activeTabThree,
        },
      ],
      companyContent: [
        {
          img: "img/aboutBackground.svg",
          title: "lorem ipsum 1",
          description: "this is description1 for company and what i did",
        },
        {
          img: "img/aboutBackground.svg",
          title: "lorem ipsum 2",
          description: "this is description2 for company and what i did",
        },
        {
          img: "img/aboutBackground.svg",
          title: "lorem ipsum 3",
          description: "this is description 3 for company and what i did",
        },
      ],
    };
  },

  methods: {
    activeTabOne() {
      this.tab = 1;
      console.log(this.tab);
    },
    activeTabTwo() {
      this.tab = 2;
      console.log(this.tab);
    },
    activeTabThree() {
      this.tab = 3;
    },
  },
};
</script>

