import * as React from "react";

import ErrorBoundary from "./ErrorBoundary";

const RemoteButton = React.lazy(() => import("components/Button"));

const App = () => {
  console.log(RemoteButton);
  return (
    <div>
      <h1>Typescript</h1>
      <h2>Astrology</h2>
      <ErrorBoundary>
        <React.Suspense fallback="Loading Button">
          <RemoteButton />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
