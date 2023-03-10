<template>
  <div class="container">
    <h1 class="text-primary-green text-center">Faqs</h1>
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
          title:
            "What frontend technologies do you typically use in your projects?",
          content:
            "In my frontend development projects, I typically use Vue.js as my JavaScript framework and Tailwind CSS as my styling library. I find that Vue.js provides a flexible and intuitive framework for building dynamic user interfaces, while Tailwind CSS allows me to quickly and easily create responsive and visually appealing designs. Additionally, I am experienced in using other popular frontend technologies such as React, Angular, and Bootstrap, and I am always exploring new technologies and tools to expand my skill set.",
          open: false,
        },
        {
          title:
            "How do you ensure that your work meets the expectations of clients and stakeholders?",
          content:
            "To ensure that my work meets the expectations of clients and stakeholders, I make sure to understand their needs and requirements thoroughly at the outset of the project. I provide regular updates on project milestones, solicit feedback, and proactively address any concerns or issues that arise. Additionally, I use a user-centered design approach to ensure that the end product meets the needs of the target audience.",
          open: false,
        },
        {
          title:
            "Can you describe your approach to working with clients and collaborating with cross-functional teams?",
          content:
            "I approach working with clients and collaborating with cross-functional teams with a customer-centric mindset, where I prioritize meeting their needs and delivering high-quality results. I listen carefully to their requirements, ask relevant questions, and provide regular updates on my progress. Additionally, I value clear communication, collaboration, and feedback, which helps me to establish trust and build strong working relationships with my clients and team members.",
          open: false,
        },
        {
          title:
            "How do you keep up-to-date with the latest front-end development trends and technologies?",
          content:
            "As a frontend developer, it's essential to keep up-to-date with the latest trends and technologies. I stay current by attending web development conferences and meetups, following industry blogs and newsletters, and participating in online forums and discussions. Additionally, I continuously seek opportunities to learn new skills and technologies through online courses, tutorials, and hands-on practice.",
          open: false,
        },
        {
          title:
            "Can you describe your experience working as a frontend developer for companies and as a freelancer?",
          content:
            "I have experience working as a frontend developer for several companies, where I have designed and implemented web applications, collaborated with cross-functional teams, and contributed to the development of complex projects. Additionally, I have worked as a freelancer, where I have provided web design and development services to clients, managed my own projects, and delivered quality results on time.",
          open: false,
        },
      ],
    };
  },
};
</script>
