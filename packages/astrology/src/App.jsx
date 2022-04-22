import React from 'react';

const Button = React.lazy(() => import('components/Button').then(module => {
  console.log(module)
  return module
}));

export const App = () => {
  return (
    <div>
      <h1>App</h1>
      <React.Suspense fallback="Loading...">
        <Button primary label="My button" />
      </React.Suspense>
    </div>
  );
};
