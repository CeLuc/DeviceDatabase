<template>
  <div>
    <div class="space-y-5">
      <div class="flex space-x-2">
        <UIInput
          label="Firstname"
          placeholder="Firstname"
          v-model="registerData.firstname"
          :error="fnameError"
          height="2"
        />
        <UIInput
          label="Lastname"
          placeholder="Lastname"
          v-model="registerData.lastname"
          :error="lnameError"
          height="2"
        />
      </div>
      <UIInput
        label="Username"
        placeholder="username"
        v-model="registerData.username"
        :error="unameError"
      />
      <UIInput
        label="Password"
        placeholder="*********"
        type="password"
        v-model="registerData.password"
        :error="passwdError"
      />
      <UIInput
        label="Repeat Password"
        placeholder="*********"
        type="password"
        v-model="registerData.repeatPassword"
        :error="repeatError"
      />
    </div>
    <div class="mt-6">
      <AuthSubmitButton @function="signUpHandler" value="Sign Up" />
    </div>
    <div class="mt-2 mb-4 text-sm">
      <span>
        <p class="inline">By clicking “Create account”, you agree to our</p>
        <NuxtLink
          to="/legal/tos"
          class="text-light-primary dark:text-dark-primary"
        >
          terms of service</NuxtLink
        >,
        <NuxtLink
          to="/legal/privacy-policy"
          class="text-light-primary dark:text-dark-primary"
          >privacy policy</NuxtLink
        >
        and
        <NuxtLink
          to="/legal/cookie-policy"
          class="text-light-primary dark:text-dark-primary"
          >cookie policy</NuxtLink
        >
      </span>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { callbackUrl } = route.query
const registerData = reactive({
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  repeatPassword: '',
})
const fnameError = useState()
const lnameError = useState()
const unameError = useState()
const passwdError = useState()
const repeatError = useState()

const signUpHandler = async () => {
  // build payload
  const payload = {
    firstname: registerData.firstname,
    lastname: registerData.lastname,
    username: registerData.username,
    password: registerData.password,
    repeatPassword: registerData.repeatPassword,
  }

  // make request
  const { data, pending, error, refresh } = await useFetch(
    '/api/auth/register',
    {
      method: 'POST',
      body: payload,
    }
  )

  // check if there was an error
  if (data.value) {
    return navigateTo('/login')
  }

  const { statusCode } = error.value
  const { statusMessage } = error.value

  // error handling´
  fnameError.value = null
  lnameError.value = null
  unameError.value = null
  passwdError.value = null
  repeatError.value = null

  if (statusMessage === 'Invalid params') {
    if (!payload.firstname) {
      fnameError.value = 'Firstname must be provided'
    }

    if (!payload.lastname) {
      lnameError.value = 'Lastname must be provided'
    }

    if (!payload.username) {
      unameError.value = 'Username must be provided'
    }

    if (!payload.password) {
      passwdError.value = 'Password must be provided'
    }

    if (!payload.repeatPassword) {
      repeatError.value = 'Repeat Password must be provided'
    }
  }

  if (statusMessage === 'Username already exists') {
    unameError.value = 'User already exists'
  }

  if (statusMessage === 'Password does not match security requirements') {
    passwdError.value =
      'Make sure the password has minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
  }

  if (statusMessage === 'Passwords do not match') {
    passwdError.value = 'Passwords must match'
    repeatError.value = 'Passwords must match'
  }

  return true
}
</script>
