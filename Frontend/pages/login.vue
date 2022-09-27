<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  },
};
</script>

<template>
  <div class="prose text-text-primary bg-bg-primary">
    <div
      class="flex flex-col bg-bg-primary text-base min-h-screen min-w-[300px]"
    >
      <div class="flex flex-row flex-1">
        <div class="flex flex-col flex-1 min-w-0">
          <div class="flex flex-1 w-full">
            <div class="flex-1 order-1 min-w-0 p-10">
              <div
                class="flex flex-col m-0 border rounded h-calc bg-bg-secondary border-bg-primary"
              >
                <div class="px-6 py-4 border-b rounded-t border-bg-primary">
                  Back
                </div>
                <div class="relative flex flex-1 w-full px-6 py-4">
                  <div class="m-auto block w-full max-w-[35rem]">
                    <div>
                      <h1 class="mt-0 mb-3 text-4xl font-bold text-center">
                        Login
                      </h1>
                      <p class="mb-8 text-base font-normal text-center">
                        Hello! Log in with your email.
                      </p>
                      <FormKit
                        type="text"
                        name="Username"
                        placeholder="Username"
                        label="Username:"
                        v-model="username"
                        validation="required|*length:4"
                        :classes="{
                          outer: 'mb-8',
                          label: 'mb-1 text-sm text-text-secondary',
                          input: `$reset rounded text-base px-4 py-3 w-full transition-all mt-4 duration-150 ease-in border placeholder:text-text-secondary border-danger text-text-primary hover:bg-bg-primary bg-bg-tertiary focus-visible:border-danger focus-visible:outline-none focus-visible:bg-bg-secondary ${
                            username.length >= 4
                              ? 'valid:border-accept valid:focus-visible:border-accept'
                              : ''
                          }`,
                        }"
                        validation-visibility="live"
                        :validation-messages="{
                          required: 'Username is required!',
                          length:
                            'Username should be at least 4 Characters long!',
                        }"
                      />
                      <FormKit
                        type="password"
                        name="Password"
                        placeholder="Password"
                        label="Password:"
                        v-model="password"
                        :classes="{
                          outer: 'mb-8',
                          label: 'mb-1 text-sm text-text-secondary',
                          input: `$reset rounded text-base px-4 py-3 w-full transition-all mt-4 duration-150 ease-in border placeholder:text-text-secondary border-danger text-text-primary hover:bg-bg-primary bg-bg-tertiary focus-visible:border-danger focus-visible:outline-none focus-visible:bg-bg-secondary ${
                            password.length >= 4
                              ? 'valid:border-accept valid:focus-visible:border-accept'
                              : ''
                          }`,
                        }"
                        validation="required|length:4"
                        validation-visibility="live"
                        :validation-messages="{
                          required: 'Password is required!',
                          length:
                            'Password should be at least 8 Characters long!',
                        }"
                      />
                      <FormKit
                        type="checkbox"
                        name="Remember"
                        placeholder="Remember"
                        label="Remember"
                        v-model="remember"
                        :classes="{
                          outer: 'mb-8',
                          wrapper: 'inline-flex',
                          label: 'color-text-secondary pl-3',
                          input:
                            'form-checkbox p-0 h-[18px] w-[18px] bg-[rgba(180,180,219,.08)] hover:bg-[rgba(161,110,255,.16)] border border-text-secondary hover:border-primary rounded duration-150 ease-in transition-all checked:bg-primary checked:hover:bg-text-link checked:border-primary focus:border-text-secondary',
                        }"
                        validation-visibility="submit"
                      />
                      <FormKit
                        type="submit"
                        name="Submit"
                        placeholder="LOG IN"
                        label="LOG IN"
                        @click="login({ username, password })"
                        :classes="{
                          input:
                            'bg-primary border-primary border uppercase rounded duration-150 ease-in transition-all w-full px-5 py-3',
                        }"
                        validation-visibility="submit"
                      />
                      <div class="block mt-8 text-center">
                        <span>Problems with Login? </span>
                        <a
                          class="underline text-text-secondary"
                          href="mailto:it@sanktelisabeth.de"
                          >Support</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h2 class="mb-4">Login</h2>
    <form @submit.prevent="createCharacter">
      <div class="mb-4">
        <input
          v-model="credusername"
          type="text"
          class="px-3 py-2 leading-tight text-gray-700 border rounded shadow"
          placeholder="username"
        />
      </div>
      <div class="mb-4">
        <input
          v-model="credpassword"
          type="password"
          class="px-3 py-2 leading-tight text-gray-700 border rounded shadow"
          placeholder="password"
        />
      </div>
      <button
        class="px-3 py-2 font-semibold text-white bg-green-600"
        type="submit"
        @click="login"
      >
        Login
      </button>
    </form> -->
  </div>
</template>
<script setup>
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import functions from "~/functions";

const jwt = useCookie("jwt");
const parseJwt = functions.parseJwt;
const router = useRouter();

const LOGIN_REQ = gql`
  mutation ($username: String!, $password: String!) {
    loginUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;

const { mutate: loginMutation, error: error, onDone } = useMutation(LOGIN_REQ);
onDone((result) => {
  jwt.value = result.data.loginUser.token;

  if (process.client) {
    localStorage.setItem("currentUser", JSON.stringify(parseJwt(jwt.value)));
  }
  router.push("/");
});

function login({ username, password }) {
  console.log(username);
  console.log(password);
  loginMutation({ username: username, password: password });
}

definePageMeta({
  layout: "",
});
</script>

<style scoped>
[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
.h-calc {
  height: calc(100vh - 2 * 2.5rem);
}
</style>
