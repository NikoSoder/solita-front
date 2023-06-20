import React, { ReactNode, ErrorInfo, Component } from "react";

class ErrorBoundary extends React.Component<any, any> {
  //   constructor(props) {
  //     super(props);
  //     this.state = { hasError: false };
  //   }
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  componentDidMount() {
    window.addEventListener(
      "unhandledrejection",
      this.handleUnhandledRejection
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.handleUnhandledRejection
    );
  }

  handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    event.preventDefault();
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
