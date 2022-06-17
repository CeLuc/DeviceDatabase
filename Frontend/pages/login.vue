<template>
  <div>
    <h2 class="mb-4">Create Character</h2>
    <form @submit.prevent="createCharacter">
      <div class="mb-4">
        <input
          v-model="credemail"
          type="email"
          class="px-3 py-2 leading-tight text-gray-700 border rounded shadow"
          placeholder="email"
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
        @click="llgg"
      >
        Login
      </button>
    </form>
  </div>
</template>
<script setup>
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";

const credemail = useState("credemail");
const credpassword = useState("credpassword");

const LOGIN_REQ = gql`
  mutation ($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;

const { mutate: loginMutation, error: error, onDone } = useMutation(LOGIN_REQ);
onDone((result) => {
  if (process.client) {
    localStorage.setItem("authToken", result.data.loginUser.token);
  }
});

function llgg() {
  const email = credemail.value;
  const password = credpassword.value;
  console.log(email);
  console.log(password);

  loginMutation({ email: email, password: password });
  console.log(data);
}
</script>
