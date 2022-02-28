import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import ErrorBoundary from "./src/utils/ErrorBoundary";
import Toast from "react-native-toast-message";
import { ApolloProvider } from "@apollo/client";
import { initApolloClient } from "./src/utils/initApolloClient";

export default function App() {
  const apolloClient = initApolloClient();

  if (!apolloClient) {
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
