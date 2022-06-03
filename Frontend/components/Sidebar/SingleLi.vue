<script setup>
defineProps(["name", "color", "link"]);
</script>

<template>
  <li class="my-px text-gray-300">
    <NuxtLink
      :to="{ path: link }"
      activeClass="text-gray-700 bg-gray-100"
      class="flex flex-row items-center h-10 px-3 transition-all duration-200 rounded-lg hover:ease-in hover:bg-gray-100 hover:text-gray-700"
    >
      <span
        class="flex items-center justify-center text-lg"
        :class="[color != null ? color : 'text-gray-400']"
      >
        <div class="w-6 h-6 fill-current">
          <slot />
        </div>
      </span>
      <span class="ml-3">{{ name }}</span>
    </NuxtLink>
  </li>
</template>
