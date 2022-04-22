import React from "react";
import Stars from "../../assets/stars.svg";

const Header = React.lazy(() =>
  import("components/Header").then((module) => {
    return { default: module.Header };
  })
);

const onEvent = () => {
  console.log("event!");
};

export const App = () => {
  return (
    <div>
      <React.Suspense fallback="Loading...">
        <Header
          text="astrology"
          logo={Stars}
          onCreateAccount={onEvent}
          onLogin={onEvent}
          onLogout={onEvent}
        />
      </React.Suspense>
    </div>
  );
};
