<template>
  <div>
    <div class="flex items-center">
      <input
        :id="label"
        type="checkbox"
        @input="$emit('update:modelValue', $event.target.checked)"
        :value="modelValue"
        class="w-3 h-3 bg-transparent border-2 rounded checked:bg-light-primary checked:dark:bg-dark-primary dark:border-dark-neutral/50 border-light-text/50 focus:ring-offset-0 focus:ring-0"
      />
      <label :for="label" v-if="label" class="block ml-2">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup>
defineEmits(["update:modelValue"]);
defineProps({
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
