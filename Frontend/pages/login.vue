<template>
  <div>
    <h2 class="mb-4">Login</h2>
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
    </form>
  </div>
</template>
<script setup>
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import functions from "~/functions";

const credusername = useState("credusername");
const credpassword = useState("credpassword");
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
});

function login() {
  const username = credusername.value;
  const password = credpassword.value;

  loginMutation({ username: username, password: password });

  router.push("/");
}
</script>
