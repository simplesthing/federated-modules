import MoonAndStars from "../../assets/moon-stars.svg";
import React from "react";

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
          text="dreams"
          logo={MoonAndStars}
          onCreateAccount={onEvent}
          onLogin={onEvent}
          onLogout={onEvent}
        />
      </React.Suspense>
    </div>
  );
};
