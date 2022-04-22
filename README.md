# federated-modules

Webpack 5 module federation demo using yarn workspace and storybook for react components.

## components

The "remote" application, `components`, is a storybook application that contains the UI components that will be exposed to "host" applications.


[Code](./packages/components/README.md)

[App](https://simplesthing.github.io/federated-modules/@simplesthing/components/index.html)


## astrology & dreams

"Remote" applications `astrology` and `dreams` are consuming the remote UI from the storybook UI library.
