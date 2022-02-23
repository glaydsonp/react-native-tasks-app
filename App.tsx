import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import ErrorBoundary from "./src/utils/ErrorBoundary";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ErrorBoundary>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ErrorBoundary>
      </SafeAreaProvider>
    );
  }
}
