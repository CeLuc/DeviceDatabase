import { defineNuxtPlugin } from "#app";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: useRuntimeConfig().public.apiBase,
    defaultOptions: defaultOptions,
    // configuration //
  });
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
