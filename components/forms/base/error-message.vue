<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<template>
  <span aria-live="assertive" class="errorMessage" :id="id">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.errorMessage {
  margin-left: 1rem;
  font-style: italic;
  font-size: 0.9rem;
  color: red;
  ::before {
    content: "*";
  }
}
</style>
