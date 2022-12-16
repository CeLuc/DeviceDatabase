<template>
  <form :onSubmit="handleSubmit">
    <div @keyup.enter="handleSubmit">
      <UIInput
        v-model="loginData.username"
        placeholder="username"
        label="Username"
        class="mb-5"
      />
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
      <AuthSubmitButton />
    </div>
    <div class="mt-5 text-center">
      <NuxtLink
        to="/register"
        class="dark:text-dark-primary text-light-primary"
      >
        Or register a new account
      </NuxtLink>
    </div>
    {{test}}
  </form>
</template>

<script setup>
const { signIn } = useSession();
const loginData = reactive({
  username: "",
  password: "",
  remember: false
});

const test = ref('init')
if(registerData.password.length < 8){
  test = "pw to short"
}

// const handleSubmit = () => {
//   signIn("credentials", {
//     username: "ne",
//     password: loginData.password,
//     redirect: false,
//   }).then(({ ok, error }) => {
//     if (error) {
//       console.log("ok");
//     } else {
//       console.log("hallo");
//       // console.log(error)
//     }
//   });
// };
const handleSubmit = () => {
  signIn("credentials", loginData);
};
</script>
