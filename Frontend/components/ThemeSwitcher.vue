<template>
  <div>
    <select
      v-model="$colorMode.preference"
      class="px-5 py-2 rounded-lg dark:bg-gray-600"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>
