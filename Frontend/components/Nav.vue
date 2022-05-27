<template>
  <div>
    <ul class="bg-gray-300 flex space-x-4">
      <li>
        <NuxtLink to="/" activeClass="active">Home</NuxtLink>
      </li>
      <li><NuxtLink to="/about" activeClass="active">About what</NuxtLink></li>
    </ul>
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .active {
    @apply text-green-700;
  }
}
</style>
