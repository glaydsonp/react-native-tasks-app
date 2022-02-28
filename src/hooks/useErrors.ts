import { useEffect, useState, useCallback } from "react";
import { ApolloError } from "@apollo/client";
import Toast from "react-native-toast-message";

export const useError = (
  message: string | undefined,
  error: ApolloError | undefined = undefined
) => {
  useEffect(() => {
    if (!error) {
      return;
    }

    if (!message) {
      return;
    }

    Toast.show({
      type: "error",
      text1: message,
      text2: error.message,
    });

    console.log("unknown", "unhandled error", error);
  }, [error]);
};

export const useErrorCallback = () => {
  const [error, setError] = useState<Error>();
  const [{ nError }, setNetworkError] = useState<{
    nError: ApolloError | undefined;
  }>({
    nError: undefined,
  });

  useError(nError.message, nError);

  const lazyError = useCallback((e: string | Error, autoDismiss = true) => {
    const err: Error = typeof e === "string" ? new Error(e) : e;

    setError(err);

    Toast.show({
      text1: err.message,
      type: "error",
    });
  }, []);

  const lazyNetworkError = useCallback((nError: ApolloError) => {
    setNetworkError({
      nError,
    });
  }, []);

  return { error, lazyNetworkError, lazyError };
};
