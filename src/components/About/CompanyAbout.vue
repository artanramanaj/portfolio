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
          class="absolute top-[20%] left-[60%] md:left-[20%] w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        />
        <h1>FinnieConsulting</h1>
        <p>
          In my previous role as a Frontend developer, I create visually
          appealing and responsive interfaces that engage users and enhance
          their overall experience. I stay up-to-date with the latest industry
          trends to continuously improve the quality of my work.
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
          In my previous role as a frontend developer, I designed and developed
          user interfaces using latest Frontend tech. I collaborated with teams
          to ensure optimal performance and stayed up-to-date with industry
          trends.
        </p>
      </div>

    

      <div
        v-if="tab == 3"
        class="flex flex-col justify-center items-start gap-4 w-[100%]"
      >
        <img
          src="/img/companyimg.svg"
          alt="test1"
          class="absolute top-[20%] left-[60%] lg:left-[20%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
        />
        <h1>Tactica</h1>
        <p>
          In my previous role as a WordPress developer, I designed and developed
          user-friendly websites using Elementor as a page builder and Figma as
          a design tool. I collaborated with other team members to ensure
          optimal performance and user experience.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "companyAbout",
  data() {
    return {
      tab: 1,
      active: "FinnieConsulting",
      currentDate: "",
      currentMonths: "",
      companyData: [
      {
          name: "FinnieConsulting",
          position: "Frontend Developer",
          time: "2 years and 5 months",
          from: "03.10.2022",
          to: "01.02.2025",
          tab: this.activeTabOne,
        },
        {
          name: "MeshCOM",
          position: "Frontend Developer",
          time: "12 months",
          from: "01.11.2021",
          to: "01.10.2022",
          tab: this.activeTabTwo,
        },
    
        {
          name: "Tactica",
          position: "WordPress Developer & UI/UX Designer",
          time: "6 months",
          from: "01.05.2021",
          to: "30.10.2021",
          tab: this.activeTabThree,
        },
      ],
      companyContent: [
        {
          img: "img/aboutBackground.svg",
          title: "lorem ipsum 1",
        },
        {
          img: "img/aboutBackground.svg",
          title: "lorem ipsum 2",
        },
        {
          img: "img/aboutBackground.svg",
          title: "lorem ipsum 3",
        },
      ],
    };
  },
  methods: {
    activeTabOne() {
      this.tab = 1;
      this.active = "FinnieConsulting";
    },
 
    activeTabTwo() {
      this.tab = 2;
      this.active = "MeshCOM";
    },
    activeTabThree() {
      this.tab =3;
      this.active = "Tactica";
    },
  
    getCurrentDate() {
      // this.currentDate = moment().format("DD.MM.YYYY");
      // this.companyData[2].to = this.currentDate;
    },
    calculateMonths() {
      // const from = moment(this.companyData[2].from, "DD.MM.YYYY");
      // const to = this.companyData[2].to
      //   ? moment(this.companyData[2].to, "DD.MM.YYYY")
      //   : moment();
      // const monthsDiff = to.diff(from, "months");
      // this.companyData[2].time = `${monthsDiff} months`;
      // this.currentMonths = this.companyData[2].time;
    },
  },
  mounted() {
    // this.getCurrentDate();
    // this.calculateMonths();
  },
};
</script>
