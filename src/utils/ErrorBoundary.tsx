import React from "react";
import { Text } from "react-native";
import { View } from "../components/Themed";

interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo: any;
}

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, errorInfo: false };
  }

  static getDerivedStateFromError(error) {
    console.warn(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong.</Text>

          <Text>
            {this.state.hasError && this.state.hasError.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </Text>

          <View>{this.props.children}</View>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
