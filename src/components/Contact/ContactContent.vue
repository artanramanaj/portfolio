<template>
  <div>
    <VeeForm
      class="flex flex-col items-center gap-4 text-black"
      :validation-schema="schema"
      @submit="submitForm"
    >
      <label
        for=""
        class="flex flex-col w-full lg:w-1/2 text-white capitalize gap-1"
        >name
        <VeeField type="text" name="name" class="p-2 rounded-lg text-black" />
        <ErrorMessage class="text-red-500" name="name" />
      </label>

      <label
        for=""
        class="flex flex-col w-full lg:w-1/2 text-white capitalize gap-1"
        >Email
        <VeeField type="email" name="email" class="p-2 rounded-lg text-black" />
        <ErrorMessage class="text-red-500" name="email" />
      </label>

      <label
        for=""
        class="flex flex-col w-full lg:w-1/2 text-white capitalize gap-1"
        >Message
        <VeeField
          as="textarea"
          name="message"
          id=""
          cols="30"
          rows="10"
          class="p-2 rounded-lg text-black"
        />
        <ErrorMessage class="text-red-500" name="message" />
      </label>
      <button class="primary-btn w-full lg:w-1/2 border-0 focus:outline-none">
        submit
      </button>
    </VeeForm>
  </div>
</template>

<script>
export default {
  name: "contactcontent",
  data() {
    return {
      schema: {
        name: "required|min:5|max:20",
        email: "required|email",
        message: "required|min:10|max:100",
      },
    };
  },
  methods: {
    submitForm(values) {
      console.log("submited", values);
      this.$toast.error(
        `Thank you for your message. I'm sorry, but the form is currently in progress and I'm unable to process your request at this time. Please reach out to me using the contact information provided in the footer. Thank you for your patience and understanding.`,
        {
          position: "bottom-right",
          duration: 15000,
          dismissible: true,
        }
      );
    },
  },
};
</script>
