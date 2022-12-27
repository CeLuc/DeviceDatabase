<template>
  <div @keyup.enter="handleSubmit">
    <div>
      <UIInput
        v-model="loginData.username"
        placeholder="username"
        label="Username"
        class="mb-5"
      />
      {{ loginData }}
      <UIInput
        v-model="loginData.password"
        placeholder="*********"
        type="password"
        label="Password"
      />
    </div>
    <div class="mt-5">
      <UIInputCheckbox
        v-model="loginData.remember"
        label="Remember me senpai!"
      />
    </div>
    <div class="mt-6">
      <AuthSubmitButton @function="handleSubmit" value="Log In" />
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
const { signIn } = useSession();
const loginData = reactive({
  username: "",
  password: "",
  remember: false,
});

const handleSubmit = () => {
  signIn("credentials", loginData);
};
</script>
