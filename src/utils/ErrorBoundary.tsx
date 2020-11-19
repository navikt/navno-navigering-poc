import * as React from "react";
import { isTest } from "./environment";

interface Props {
  boundaryName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (isTest()) {
      throw error;
    }
    this.setState({ hasError: true, error });
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Beklager, det skjedde dessverre en feil med brukertesten.</p>
          <p>Vi skal prøve å fikse dette så raskt som mulig</p>
          <a href="https://www.nav.no">Tilbake til nav.no</a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
