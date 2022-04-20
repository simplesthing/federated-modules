import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    console.log(JSON.stringify(this.state.hasError));
    const content = this.state.hasError ? (
      <h1>Sorry.. there was an error</h1>
    ) : (
      this.props.children
    );
    return <>{content}</>;
  }
}

export default ErrorBoundary;
