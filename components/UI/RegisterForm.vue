<template>
  <form @keyup.enter="handleSubmit" :onSubmit="handleSubmit">
    <div>
      <UIInput
        v-model="registerData.firstname"
        placeholder="firstname"
        label="Firstname"
        class="mb-5"
      />
      <UIInput
        v-model="registerData.lastname"
        placeholder="lastname"
        label="Lastname"
        class="mb-5"
      />
      <UIInput
        v-model="registerData.username"
        placeholder="username"
        label="Username"
        class="mb-5"
      />
      <UIInput
        v-model="registerData.password"
        placeholder="*********"
        type="password"
        label="Password"
        class="mb-5"
      />
    </div>
    <div class="">
      <UIInputCheckbox
        v-model="registerData.agbaccept"
        label="By creating an account you agree to our terms of use and privacy policy. (non existing)"
        class="mb-5"
      />
    </div>
    <div>

  <input
    type="submit"
    class="mb-5 w-full h-8 rounded-md focus:ring-0 hover:dark:bg-priamry/30 hover:bg-light-primary/70 dark:bg-dark-primary bg-light-primary"
    value="Create account"

  />

    </div>
  </form>
</template>

<script setup>
const { signIn } = useSession();
const registerData = reactive({
  fname:"",
  lname: "",
  email: "",
  username: "",
  password: "",
  agbaccept: false,
});


const handleSubmit = () => {
  signIn("credentials", registerData)
}
</script>
