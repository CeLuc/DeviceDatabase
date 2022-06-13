import { gql } from "graphql-tag";

import { LocalScheme } from "@nuxtjs/auth-next/dist/runtime";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String, $password: String) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation LogOutMutation {
    logOut
  }
`;

export const USER_DETAILS_QUERY = gql`
  query UserDetailsQuery {
    user {
      id
      name
      email
    }
  }
`;

export default class GraphQLScheme extends LocalScheme {
  async login(credentials, { reset = true } = {}) {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
    } = this.$auth.ctx.app;

    // Ditch any leftover local tokens before attempting to log in
    if (reset) {
      this.$auth.reset({ resetInterceptor: false });
    }

    // Make login request
    const response = await apolloClient
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: credentials,
      })
      .then(({ data }) => data && data.logIn);

    // Update our cookie token
    this.token.set(response.token);

    // Set our graphql-token so subsequent graphql request are authenticated
    await $apolloHelpers.onLogin(response.token);

    // Fetch user
    await this.fetchUser(); // We will define this function next

    return response.token;
  }

  fetchUser() {
    const {
      apolloProvider: { defaultClient: apolloClient },
    } = this.$auth.ctx.app;

    // Token is required but not available
    if (!this.check().valid) {
      return;
    }

    // Try to fetch user
    return apolloClient
      .query({
        query: USER_DETAILS_QUERY,
      })
      .then(({ data }) => {
        if (!data.me) {
          const error = new Error(`User Data response not resolved`);
          return Promise.reject(error);
        }
        // Set the auth user
        this.$auth.setUser(data.me);

        return data.me;
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: "fetchUser" });
        return Promise.reject(error);
      });
  }

  async logout() {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
    } = this.$auth.ctx.app;

    await apolloClient
      .mutate({
        mutation: LOGOUT_MUTATION,
      })
      .catch(() => {
        // Handle errors
      });

    // Reset regardless
    $apolloHelpers.onLogout();
    return this.$auth.reset({ resetInterceptor: false });
  }

  initializeRequestInterceptor() {
    // Instead of initializing axios interceptors, Do nothing
    // Since we are not using axios
  }

  reset() {
    this.$auth.setUser(false);
    this.token.reset();
  }
}
