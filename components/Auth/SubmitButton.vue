<script setup>
const emit = defineEmits('function')
defineProps({
  value: {
    type: String,
    required: true,
  },
})

const handleClick = () => {
  emit('function')
}
</script>

<template>
  <button
    class="w-full h-8 rounded-md focus:ring-0 hover:dark:bg-priamry/30 hover:bg-light-primary/70 dark:bg-dark-primary bg-light-primary"
    type="submit"
    @click="handleClick"
    @keydown.enter="handleClick"
  >
    {{ value }}
  </button>
</template>
