import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageWrapper, CachePersistor } from "apollo3-cache-persist";
import { onError } from "@apollo/client/link/error";
import { useEffect, useState } from "react";
import { typePolicies } from "./apolloTypePolicies";
import { useError } from "../hooks/useErrors";
import Toast from "react-native-toast-message";

const cache = new InMemoryCache({
  typePolicies,
  resultCaching: true,
  addTypename: true,
});

const persistor = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
});

const httpLink = createHttpLink({
  uri: "http://104.198.75.241/", // staging
  // uri: "http://localhost:4000/", // local development
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      throw new Error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });

  if (networkError) {
    Toast.show({
      type: "error",
      text1: `[Network error]: ${networkError}`,
    });
  }
});

export const initApolloClient = () => {
  const [client, setClient] = useState<ApolloClient<any>>();
  useEffect(() => {
    async function initializeCache() {
      await persistor.restore();
      const client = new ApolloClient({
        link: from([errorLink, httpLink]),
        cache,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-first",
          },
        },
      });
      client.onClearStore(async () => {
        await persistor.purge();
      });
      setClient(client);
    }
    initializeCache();
  }, []);
  return client;
};
