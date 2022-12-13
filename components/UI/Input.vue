<template>
  <div>
    <label
      :for="props.label"
      v-if="props.label"
      class="block mb-1 ml-px font-medium"
    >
      {{ props.label }}
    </label>
    <input
      :id="props.label"
      :type="props.type"
      @input="(event) => emits('update:modelValue', event.target.value)"
      class="w-full h-8 pl-3 border-0 rounded-md focus:ring-0 focus:outline-none text-light-text dark:text-dark-neutral dark:placeholder:text-dark-neutral/70 dark:bg-dark-bg bg-light-bg placeholder:text-light-text/70"
      :placeholder="props.placeholder"
      :value="props.modelValue"
    />
  </div>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: null,
  },
});
</script>
