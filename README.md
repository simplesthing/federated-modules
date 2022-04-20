# federated-modules

Webpack 5 module federation demo

This is app is using yarn workspace mono repository style. Workspaces have an advantage of sharing development dependencies, and scripts, across all packages in the same repository while maintaining separation of runtime dependencies for each application when it is bundled and deployed.

## components

[Storybook](https://simplesthing.github.io/federated-modules/@simplesthing/components/index.html)

The container application `components` is a storybook app that contains the UI components that will be shared. Storybook allows for separation of business and presentation logic by building only the view components.

The component library follows the principles of atomic design, in that when evaluating a piece of user interface it should begin it's evaluation with the smallest unit and build it's way upward towards increasingly larger compositions. The [general pattern](https://www.componentdriven.org/) is `atom -> molecule -> organism -> template -> page`.

A `page` is the application wrapper that connects the `template` to the application's data. This workflow aides in speed of development over time as it enforces the necessary stubbing of data and inputs, test case scenarios, and implementations that the component is capable of.

## astrology & dreams

Remote applications `astrology` and `dreams` will be consuming UI shared components from the component library container application.
