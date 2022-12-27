<template>
  <div class="flex w-full h-screen bg-light-bg dark:bg-dark-bg">
    <div class="relative w-full xl:w-3/12 bg-light-neutral dark:bg-dark-grey">
      <div class="mb-6 text-center font-bold text-4xl mt-[330px]">
        <h1>Log in</h1>
      </div>
      <div class="pt-5 px-7">
        <AuthLoginForm />
      </div>
    </div>
    <div class="items-center justify-center hidden w-9/12 xl:flex">
      <IllustrationsLoginLight v-if="$colorMode.value == 'light'" />
      <IllustrationsLoginDark v-else />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  auth: false,
  layout: false,
  colorMode: 'system',
})
</script>
