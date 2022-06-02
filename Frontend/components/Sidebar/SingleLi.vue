<script setup>
defineProps(["name", "color", "link"]);
const defaultColor = "text-gray-400";
</script>

<template>
  <li class="my-px text-gray-300">
    <NuxtLink
      :to="{ path: link }"
      activeClass="text-gray-700 bg-gray-100"
      class="flex flex-row items-center h-10 px-3 rounded-lg hover:bg-gray-100 hover:text-gray-700"
    >
      <span
        class="flex items-center justify-center text-lg"
        :class="[color != null ? color : defaultColor]"
      >
        <div class="w-6 h-6">
          <slot />
        </div>
      </span>
      <span class="ml-3">{{ name }}</span>
    </NuxtLink>
  </li>
</template>
