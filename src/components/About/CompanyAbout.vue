<template>
  <div class="min-w-full flex flex-col justify-between md:flex-row gap-4">
    <div class="flex flex-col w-full md:w-1/2">
      <div
        class="text-white flex flex-col gap-2 mt-4 p-8 rounded-md border-2 bg-[#101010]"
        :class="el.name == active ? 'border-primary-green' : ''"
        v-for="(el, index) in companyData"
        data-class="boxes"
        :key="index"
        :id="`box${index}`"
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
    </div>
    <div class="w-1/2 flex justify-center relative">
      <div
        v-if="tab == 1"
        class="flex flex-col justify-center items-start gap-4 w-[100%]"
      >
        <img
          src="/img/companyimg.svg"
          alt="test1"
          class="absolute top-[20%] left-[60%] lg:left-[20%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
        />
        <h1>Tactica</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          facilis libero consequuntur animi eius iure ipsum commodi nam
          asperiores temporibus.
        </p>
      </div>

      <div
        v-if="tab == 2"
        class="flex flex-col justify-center items-start gap-4 w-[100%]"
      >
        <img
          src="/img/companyimg.svg"
          alt="test1"
          class="absolute top-[20%] left-[60%] lg:left-[20%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
        />
        <h1>MeshCOM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          facilis libero consequuntur animi eius iure ipsum commodi nam
          asperiores temporibus.
        </p>
      </div>

      <div
        v-if="tab == 3"
        class="flex flex-col justify-center items-start gap-4 w-[100%]"
      >
        <img
          src="/img/companyimg.svg"
          alt="test1"
          class="absolute top-[20%] left-[60%] md:left-[20%] w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        />
        <h1>FinnieConsulting</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          facilis libero consequuntur animi eius iure ipsum commodi nam
          asperiores temporibus.
        </p>
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
      active: "tactica",
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
      this.active = "tactica";
    },
    activeTabTwo() {
      this.tab = 2;
      this.active = "MeshCOM";
    },
    activeTabThree() {
      this.tab = 3;
      this.active = "FinnieConsulting";
    },
  },
};
</script>
