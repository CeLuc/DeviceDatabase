<script setup>
defineProps(["name", "color", "link", "external"]);
</script>

<template>
  <li class="my-px text-text-secondary fill-text-secondary">
    <NuxtLink
      v-if="!external"
      :to="{ path: link }"
      activeClass="text-text-active fill-text-active"
      class="flex flex-row items-center h-10 px-3 transition-all duration-200 rounded-lg hover:ease-in hover:text-text-link"
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
    <a
      :href="link"
      v-if="external"
      target="_blank"
      class="flex flex-row items-center h-10 px-3 transition-all duration-200 rounded-lg hover:ease-in hover:text-text-link"
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
    </a>
  </li>
</template>
