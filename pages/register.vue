<script setup lang="ts">
const colorMode = useColorMode()

definePageMeta({
  auth: false,
  layout: false,
  colorMode: 'system',
})
</script>

<template>
  <div class="flex w-full h-screen bg-light-bg dark:bg-dark-bg">
    <div class="flex w-full xl:w-3/12 bg-light-neutral dark:bg-dark-grey">
      <div class="w-full my-auto">
        <div class="mb-6 text-4xl font-bold text-center">
          <h1>Sign Up</h1>
        </div>
        <div class="pt-5 px-7">
          <AuthRegisterForm />
          <div class="text-center">
            <p>Already have an account?</p>
            <NuxtLink
              to="/login"
              class="dark:text-dark-primary text-light-primary"
            >
              Log In
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="items-center justify-center hidden w-9/12 xl:flex">
      <IllustrationsRegisterLight v-if="colorMode.value == 'light'" />
      <IllustrationsRegisterDark v-else />
    </div>
  </div>
</template>
