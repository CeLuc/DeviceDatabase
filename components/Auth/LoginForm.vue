<script setup>
const route = useRoute()
const { signIn } = useSession()
const { callbackUrl } = route.query
const formData = ref({ username: null, password: null })
const formErrors = ref([])

const signInHandler = async () => {
  const { error } = await signIn('credentials', {
    ...formData.value,
    redirect: false,
  })
  if (error) {
    // Do your custom error handling here
    formErrors.value = ['Username or Password is invalid']
    // userError.value = 'Username or Password is invalid'
    // passwdError.value = 'Username or Password is invalid'
    formData.value.password = null
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    // alert(callbackUrl)
    navigateTo(callbackUrl || '/', { external: true })
  }
}
</script>

<template>
  <FormKit
    v-slot="{ state: { valid } }"
    v-model="formData"
    type="form"
    :actions="false"
    validation-visibility="submit"
    @submit="signInHandler"
  >
    <FormKit
      type="text"
      name="username"
      label="Username"
      placeholder="DoeJ"
      validation="required"
      :errors="formErrors"
      :validation-messages="{
        required: 'The Username is required',
      }"
      :classes="{
        outer: 'mb-5',
        label: 'block mb-1 ml-px font-medium',
        inner: `h-8`,
        input: `formkit-invalid:border formkit-invalid:border-light-secondary dark:formkit-invalid:border-dark-secondary w-full pl-3 border-0 rounded-md focus:ring-0 focus:outline-none text-light-text dark:text-dark-neutral dark:placeholder:text-dark-neutral/70 dark:bg-dark-bg bg-light-bg placeholder:text-light-text/70 h-full`,
        message: 'ml-1 text-sm text-light-secondary dark:text-dark-secondary',
      }"
    />
    <FormKit
      type="password"
      name="password"
      label="Password"
      placeholder="**********"
      validation="required"
      :errors="formErrors"
      :validation-messages="{
        required: 'The Password is required',
      }"
      :classes="{
        label: 'block mb-1 ml-px font-medium',
        inner: `h-8`,
        input:
          'formkit-invalid:border formkit-invalid:border-light-secondary formkit-invalid:dark:border-dark-secondary w-full pl-3 border-0 rounded-md focus:ring-0 focus:outline-none text-light-text dark:text-dark-neutral dark:placeholder:text-dark-neutral/70 dark:bg-dark-bg bg-light-bg placeholder:text-light-text/70 h-full',
        message: 'ml-1 text-sm text-light-secondary dark:text-dark-secondary',
      }"
    />

    <FormKit
      type="submit"
      label="Log In"
      :disabled="!valid"
      :classes="{
        outer: 'mt-6',
        wrapper: `h-8`,
        input:
          'w-full h-full rounded-md focus:ring-0 hover:dark:bg-priamry/30 hover:bg-light-primary/70 dark:bg-dark-primary bg-light-primary disabled:opacity-75 disabled:cursor-not-allowed',
      }"
    />
  </FormKit>
</template>
