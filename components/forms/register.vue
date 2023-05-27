<script setup>
import { onMounted, ref } from "vue";
import { initTE, Ripple, Input } from "tw-elements";
import { string, object, boolean } from "yup";

onMounted(() => {
  initTE({ Ripple, Input });
});

const showForm = ref(true);
const mail = useMail();

const validationSchema = object({
  name: string().required("Please provide your full name."),
  phone: string(),
  email: string()
    .required("This is a required field.")
    .email("Please provide a valid email address"),
  message: string(),
  register: boolean(),
});

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    register: false,
  },
});

const { value: name } = useField("name");
const { value: phone } = useField("phone");
const { value: email } = useField("email");
const { value: message } = useField("message");
const { value: register } = useField("register");

const submit = handleSubmit((values) => {
  // alert("Form submitted", values);
  sendEmail();
});

const sendEmail = () => {
  let regInterest = "";
  if (register.value) {
    regInterest = "Please let me know when Betty is available for sale";
  }
  console.log(register);
  const body = `
    Name: ${name.value}
    Phone: ${phone.value}
    Email: ${email.value}
    Message: ${message.value}
    ${regInterest}
  `;

  mail
    .send({
      replyTo: `"${name.value}, <${email.value}>"`,
      from: "martyn@thecooks.net.nz",
      to: "martyn@thecooks.net.nz",
      subject: "Enquiry about Betty",
      text: body,
    })
    .then(() => {
      name.value = "";
      phone.value = "";
      email.value = "";
      message.value = "";
      register.value = null;
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
      <form v-show="showForm" name="register" @submit="submit">
        <!--Name input-->
        <FormsBaseInput
          v-model="name"
          label="Name"
          type="text"
          :error="errors.name"
        />

        <!--Phone Input-->
        <FormsBaseInput v-model="phone" label="Phone Number" type="tel" />

        <!--Email input-->
        <FormsBaseInput
          v-model="email"
          label="Email Address"
          type="email"
          :error="errors.email"
        />

        <!--Message textarea-->
        <FormsBaseTextarea v-model="message" label="Your Message/Query" />

        <!--Checkbox-->
        <FormsBaseCheckbox
          label="Let me know when it is available please."
          v-model="register"
        />

        <!--Submit button-->
        <FormsBaseButton type="submit"> Send </FormsBaseButton>
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
