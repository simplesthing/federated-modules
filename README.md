# federated-modules

Webpack 5 module federation demo using yarn workspace and storybook for react components.

## components

The "remote" application, `components`, is a storybook application that exposes some UI components; `Button`, `SvgImage` and `Header`.

<img src="https://github.com/simplesthing/federated-modules/blob/main/packages/assets/components-storybook.png?raw=true"  width="400" />

## astrology & dreams

"Remote" applications `astrology` and `dreams` are consuming the remote UI from the storybook components **application** rather than bundling them into their own builds.

<img src="https://github.com/simplesthing/federated-modules/blob/main/packages/assets/component-federation-config.png?raw=true"  width="400"/> <img src="https://github.com/simplesthing/federated-modules/blob/main/packages/assets/federation-module-plugin.png?raw=true"  width="400"/>

See video below for a simple contrived example of the consumption and live updating of a color value in header component CSS file from the storybook application. Both astrology and dreams applications are pulling their header component into their bundle from the live components application that is serving the remote components via webpack module federation.


https://user-images.githubusercontent.com/1259113/167704129-81f86527-fd0b-4042-9b17-33ace557de94.mp4

