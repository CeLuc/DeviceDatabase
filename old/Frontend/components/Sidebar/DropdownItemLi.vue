<script setup>
defineProps(["name", "color", "link"]);
</script>

<template>
  <li class="my-px text-text-secondary fill-text-secondary first:mt-0 group">
    <NuxtLink
      :to="{ path: link }"
      activeClass="text-text-active fill-text-active"
      class="flex flex-row items-center h-10 px-3 transition-all duration-200 hover:ease-in hover:text-text-link group-last:rounded-b-xl"
    >
      <span
        class="flex items-center justify-center text-lg"
        :class="[color != null ? color : null]"
      >
        <div class="w-6 h-6 fill-current">
          <slot />
        </div>
      </span>
      <span class="ml-3">{{ name }}</span>
    </NuxtLink>
  </li>
</template>
