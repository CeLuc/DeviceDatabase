<template>
  <div>
    <p>Sign-In Options:</p>
    <button @click="signIn('credentials', { username: 'muellerh', password: 'asdf' })">Username and Password</button>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ auth: false })
  const { signIn } = useSession()
</script>