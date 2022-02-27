import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import ErrorBoundary from "./src/utils/ErrorBoundary";
import Toast from "react-native-toast-message";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo3-cache-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apolloClient = new ApolloClient({
  uri: "http://104.198.75.241/",
  cache: new InMemoryCache({
    resultCaching: true,
    addTypename: true,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache: new InMemoryCache({
        resultCaching: true,
        addTypename: true,
      }),
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  if (!isLoadingComplete && !loadingCache) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ErrorBoundary>
          <ApolloProvider client={apolloClient}>
            <Navigation />
            <StatusBar />
            <Toast />
          </ApolloProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    );
  }
}
