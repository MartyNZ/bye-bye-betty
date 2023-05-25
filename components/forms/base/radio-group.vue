<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex justify-center">
    <component
      v-for="option in options"
      :key="option.value"
      :is="vertical ? 'div' : 'span'"
      class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]"
      :class="{
        horizontal: !vertical,
      }"
    >
      <FormsBaseRadio
        :label="option.label"
        :value="option.value"
        :name="name"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
    /></component>
  </div>
</template>

<style lang="scss" scoped>
.horizontal {
  margin-right: 2rem;
}
</style>
