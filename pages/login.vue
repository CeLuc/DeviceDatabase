<template>
  <div class="flex w-full h-screen bg-light-bg dark:bg-dark-bg">
    <div class="flex w-full xl:w-3/12 bg-light-neutral dark:bg-dark-grey">
      <div class="w-full my-auto">
        <div class="mb-6 text-4xl font-bold text-center">
          <h1>Log in</h1>
        </div>
        <div class="pt-5 px-7">
          <AuthLoginForm />
        </div>
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
