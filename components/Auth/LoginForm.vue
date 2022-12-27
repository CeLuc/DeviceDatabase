<template>
  <div @keyup.enter="signInHandler">
    <div class="space-y-5">
      <UIInput
        label="Username"
        placeholder="username"
        :error="userError"
        v-model="loginData.username"
      />
      <UIInput
        label="Password"
        placeholder="*********"
        type="password"
        :error="passwdError"
        v-model="loginData.password"
      />
    </div>
    <div class="mt-6">
      <AuthSubmitButton @function="signInHandler" value="Log In" />
    </div>
    <div class="mt-5 text-center">
      <NuxtLink
        to="/register"
        class="dark:text-dark-primary text-light-primary"
      >
        Or register a new account
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { signIn } = useSession()
const { callbackUrl } = route.query
const loginData = reactive({
  username: '',
  password: '',
})
const userError = useState()
const passwdError = useState()

const signInHandler = async () => {
  const { error, url } = await signIn('credentials', {
    ...loginData,
    redirect: false,
  })
  if (error) {
    // Do your custom error handling here
    userError.value = 'Username or Password is invalid'
    passwdError.value = 'Username or Password is invalid'
    loginData.password = null
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    // alert(callbackUrl)
    navigateTo(callbackUrl, { external: true })
  }
}
</script>
