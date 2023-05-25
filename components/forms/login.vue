<script setup>
const showForm = ref(true);

const { value: email, errorMessage: emailError } = useField(
  "email",
  function (value) {
    if (!value) return "This field is required";

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(String(value).toLowerCase())) {
      return "Please enter a valid email address";
    }

    return true;
  }
);

// const email = ref("");
// const emailError = ref("");

const onSubmit = () => {
  alert("Form Submitted");
  showForm.value = false;
};
</script>

<template>
  <section class="login max-w-[90%] mx-auto">
    <h2>Login</h2>
    <div
      class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <form v-show="showForm" @submit.prevent="onSubmit">
        <FormsBaseInput
          type="email"
          label="Email"
          v-model="email"
          :error="emailError"
        />
        <span class="text-danger font-light italic text-sm">{{
          emailError
        }}</span>
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

<style lang="scss" scoped></style>
