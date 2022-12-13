<template>
  <div>
    <div class="flex items-center">
      <input
        type="checkbox"
        :id="props.label"
        @input="(event) => emits('update:modelValue', event.target.value)"
        class="w-3 h-3 bg-transparent border-2 rounded checked:bg-light-primary checked:dark:bg-dark-primary dark:border-dark-neutral/50 border-light-text/50 focus:ring-offset-0 focus:ring-0"
        :value="props.modelValue"
      />
      <label :for="props.label" v-if="props.label" class="block ml-2">
        {{ props.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
});
</script>
