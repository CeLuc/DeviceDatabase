<template>
  <div class="flex text-dark-neutral w-full h-screen">
    <div class="w-full xl:w-3/12 bg-dark-grey">
      <div class="pl-5 pt-5">
        <UILoginForm />
      </div>
    </div>
    <div class="hidden w-9/12 bg-dark-bg justify-center items-center xl:flex"><IllustrationsLogin /></div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false,
    auth: false
  })
  const { signIn } = useSession()
</script>