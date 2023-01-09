<script setup>
const route = useRoute()
const { callbackUrl } = route.query
const formData = ref({
  firstname: null,
  lastname: null,
  username: null,
  password: null,
  password_confirm: null,
})
const formErrors = ref([])

console.log(formData.value)

const signUpHandler = async () => {
  // build payload
  const {
    firstname,
    lastname,
    username,
    password,
    password_confirm: repeatPassword,
  } = formData.value
  const payload = {
    firstname,
    lastname,
    username,
    password,
    repeatPassword,
  }

  // make request
  const { data, error } = await useFetch('/api/auth/register', {
    method: 'POST',
    body: payload,
  })

  // check if there was an error
  if (data.value) {
    return navigateTo(callbackUrl || '/')
  }

  // error handling
  const { statusMessage } = error.value

  if (statusMessage === 'Username already exists') {
    formErrors.value = ['User already exists']
  }

  return true
}
</script>

<template>
  <FormKit
    v-slot="{ state: { valid } }"
    v-model="formData"
    type="form"
    :actions="false"
    validation-visibility="submit"
    @submit="signUpHandler"
  >
    <div class="flex space-x-2">
      <FormKit
        type="text"
        name="firstname"
        label="Firstname"
        placeholder="John"
        validation="required"
        :validation-messages="{
          required: 'The Firstname is required',
        }"
        :classes="{
          outer: 'mb-5',
          label: 'block mb-1 ml-px font-medium',
          inner: `h-7`,
          input: `formkit-invalid:border formkit-invalid:border-light-secondary dark:formkit-invalid:border-dark-secondary w-full pl-3 border-0 rounded-md focus:ring-0 focus:outline-none text-light-text dark:text-dark-neutral dark:placeholder:text-dark-neutral/70 dark:bg-dark-bg bg-light-bg placeholder:text-light-text/70 h-full`,
          message: 'ml-1 text-sm text-light-secondary dark:text-dark-secondary',
        }"
      />
      <FormKit
        type="text"
        name="lastname"
        label="Lastname"
        placeholder="Doe"
        validation="required"
        :validation-messages="{
          required: 'The Lastname is required',
        }"
        :classes="{
          outer: 'mb-5',
          label: 'block mb-1 ml-px font-medium',
          inner: `h-7`,
          input: `formkit-invalid:border formkit-invalid:border-light-secondary dark:formkit-invalid:border-dark-secondary w-full pl-3 border-0 rounded-md focus:ring-0 focus:outline-none text-light-text dark:text-dark-neutral dark:placeholder:text-dark-neutral/70 dark:bg-dark-bg bg-light-bg placeholder:text-light-text/70 h-full`,
          message: 'ml-1 text-sm text-light-secondary dark:text-dark-secondary',
        }"
      />
    </div>
    <FormKit
      type="text"
      name="username"
      label="Username"
      placeholder="DoeJ"
      :errors="formErrors"
      validation="required"
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
      :validation="[
        ['required'],
        [
          'matches',
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
        ],
      ]"
      :validation-messages="{
        required: 'The Password is required',
        matches:
          'Password does not match security requirements. Make sure the password has minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
      }"
      :classes="{
        outer: 'mb-5',
        label: 'block mb-1 ml-px font-medium',
        inner: `h-8`,
        input:
          'formkit-invalid:border formkit-invalid:border-light-secondary formkit-invalid:dark:border-dark-secondary w-full pl-3 border-0 rounded-md focus:ring-0 focus:outline-none text-light-text dark:text-dark-neutral dark:placeholder:text-dark-neutral/70 dark:bg-dark-bg bg-light-bg placeholder:text-light-text/70 h-full',
        message: 'ml-1 text-sm text-light-secondary dark:text-dark-secondary',
      }"
    />
    <FormKit
      type="password"
      name="password_confirm"
      label="Repeat Password"
      placeholder="**********"
      validation="confirm"
      :validation-messages="{
        confirm: 'Passwords do not match',
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
      label="Sign Up"
      :disabled="!valid"
      :classes="{
        outer: 'mt-6',
        wrapper: `h-8`,
        input:
          'w-full h-full rounded-md focus:ring-0 hover:dark:bg-priamry/30 hover:bg-light-primary/70 dark:bg-dark-primary bg-light-primary disabled:opacity-75 disabled:cursor-not-allowed',
      }"
    />
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
        >
          privacy policy</NuxtLink
        >
        and
        <NuxtLink
          to="/legal/cookie-policy"
          class="text-light-primary dark:text-dark-primary"
          >cookie policy</NuxtLink
        >
      </span>
    </div>
  </FormKit>
</template>
