import { defineNuxtPlugin } from "#app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  concat,
  HttpLink,
} from "@apollo/client/core";
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
  const httpLink = new HttpLink({ uri: useRuntimeConfig().public.apiBase });
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const jwt = useCookie("jwt");
    operation.setContext({
      headers: {
        authorization: jwt ? `Bearer ${jwt.value}` : "",
      },
    });
    return forward(operation);
  });
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
    // uri: useRuntimeConfig().public.apiBase,
    defaultOptions: defaultOptions,
    // configuration //
  });
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
