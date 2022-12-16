<template>
  <form @keyup.enter="handleSubmit" :onSubmit="handleSubmit">
    <p>Errror</p>
    {{regError}}
    <p>Errror</p>
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
      <UIInput
        v-model="registerData.repeatPassword"
        placeholder="*********"
        type="password"
        label="Repeat Password"
        class="mb-5"
      />
    </div>
    <div>
      <UIInputCheckbox
        v-model="registerData.test"
        label="By creating an account you agree to our terms of use and privacy policy. (non existing)"
        class="mb-5"
      />
      {{registerData.test}}
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
const agb = reactive(false)
const regError = ref('')
const registerData = reactive({
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  repeatPassword: "",
});

const handleSubmit = async () => {
  // if(!registerData.firstname || !registerData.lastname || !registerData.username || !registerData.password || !registerData.repeatPassword){
  //   regError = "01"
  //   return regError
  // }
  // if(registerData.password !== registerData.repeatPassword) {
  //   regError = "02"
  //   return regError
  // }
  if(!agb){
    regError = "03"
    console.error(regError);
    return regError
  }

  const { data, pending, error, refresh } = await useFetch('/api/auth/register', {
    method: 'POST',
    body: registerData,
    onResponse({request, response, options}){
      console.log(response._data);
      return response._data
    }
  })
};
</script>
