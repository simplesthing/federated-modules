# federated-modules

Webpack 5 module federation demo using yarn workspace and storybook for react components.

## components

The "remote" application, `components`, is a storybook application that exposes some UI components; `Button`, `SvgImage` and `Header`.

[Live Storybook App Demo](https://simplesthing.github.io/federated-modules/@simplesthing/components/index.html)

<img src="https://github.com/simplesthing/federated-modules/blob/main/packages/assets/components-storybook.png?raw=true"  width="500" />

## astrology & dreams

"Remote" applications `astrology` and `dreams` are consuming the remote UI from the storybook components **application** rather than bundling them into their own builds.
