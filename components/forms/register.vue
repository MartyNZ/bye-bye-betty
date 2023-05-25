<script setup>
import { onMounted, ref } from "vue";
// import * as yup from "@vee-validate/yup";
import { initTE, Ripple, Input } from "tw-elements";

onMounted(() => {
  initTE({ Ripple, Input });
});

// const { errors, handleSubmit } = useForm();

const regMessage = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
  register: null,
  option: "",
});

const showForm = ref(true);
const mail = useMail();

const sendEmail = () => {
  const { name, phone, email, message, register } = regMessage.value;

  let regInterest = "";
  if (register) {
    regInterest = "Please let me know when Betty is available for sale";
  }

  const body = `
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    Message: ${message}
    ${regInterest}
  `;

  mail
    .send({
      replyTo: `"${name}, <${email}>"`,
      from: "martyn@thecooks.net.nz",
      to: "martyn@thecooks.net.nz",
      subject: "Enquiry about Betty",
      text: body,
    })
    .then(() => {
      const m = regMessage.value;

      m.name = "";
      m.email = "";
      (m.phone = ""), (m.message = ""), (m.register = null);
      showForm.value = false;
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};
</script>

<template>
  <section class="register max-w-[90%] mx-auto">
    <h2>Register Your Interest</h2>
    <div>
      <p>
        This vehicle is currently being prepared for sale and is expected to be
        available early June.
      </p>
    </div>
    <p class="mb-4">
      Submit the form below and you will be contacted once it is available.
    </p>
    <div
      class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <form v-show="showForm" name="register" @submit.prevent="sendEmail">
        <!--Name input-->
        <FormsBaseInput v-model="regMessage.name" label="Name" type="text" />

        <!--Phone Input-->
        <FormsBaseInput
          v-model="regMessage.phone"
          label="Phone Number"
          type="tel"
        />

        <!--Email input-->
        <FormsBaseInput
          v-model="regMessage.email"
          label="Email Address"
          type="email"
        />

        <!--Message textarea-->
        <FormsBaseTextarea
          v-model="regMessage.message"
          label="Your Message/Query"
        />

        <!--Checkbox-->
        <FormsBaseCheckbox
          label="Let me know when it is available please."
          v-model="regMessage.register"
        />

        <!--Submit button-->
        <button
          type="submit"
          class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Send
        </button>
      </form>
      <p
        class="bg-green-300 text-green-800 py-5 text-center font-semibold"
        v-show="!showForm"
      >
        Form submitted successfully!
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.register {
  display: grid;
  place-content: center;
}
</style>
