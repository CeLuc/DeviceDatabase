<script setup>
defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: null,
  },
  error: {
    type: String,
  },
  height: {
    type: Number,
  },
})
</script>

<template>
  <div>
    <label v-if="label" :for="label" class="block mb-1 ml-px font-medium">
      {{ label }}
    </label>
    <div>
      <input
        :id="label"
        :type="type"
        v-bind="field"
        class="w-full pl-3 border-0 rounded-md focus:ring-0 focus:outline-none text-light-text dark:text-dark-neutral dark:placeholder:text-dark-neutral/70 dark:bg-dark-bg bg-light-bg placeholder:text-light-text/70"
        :placeholder="placeholder"
        :value="modelValue"
        :class="[
          error != null
            ? 'border border-light-secondary dark:border-dark-secondary'
            : '',
          height != null ? 'h-' + height : 'h-8',
        ]"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div
        v-if="error"
        class="ml-1 text-sm text-light-secondary dark:text-dark-secondary"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>
