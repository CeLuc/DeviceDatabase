<!-- <script>
export default {
  middleware: "auth",

  auth: "guest",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      formBusy: false,
    };
  },

  methods: {
    async handleLoginSubmit() {
      const credentials = this.form;
      this.formBusy = true;

      try {
        // Using our custom strategy
        await this.$auth.loginWith("graphql", credentials);

        this.formBusy = false;
      } catch (errors) {
        this.formBusy = false;
        // Handle errors
      }
    },
  },
};
</script>

<template>
  <div>
    <form method="POST" @submit.prevent="handleLoginSubmit">
      <div class="">
        <label for="email">Email address</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class=""
          aria-describedby="emailHelp"
        />
      </div>
      <div class="">
        <label for="password">Password</label>
        <input id="password" v-model="form.password" type="password" class="" />
      </div>

      <button type="submit" class="" :disabled="formBusy">
        <span v-if="formBusy" class="mr-2">loading</span> Login
      </button>
    </form>
  </div>
</template> -->
