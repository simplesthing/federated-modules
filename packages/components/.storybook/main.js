const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  "webpackFinal": async (config) => {
    config.plugins.push(new ModuleFederationPlugin({
      name: "components",
      filename: 'remoteEntry.js',
      exposes: {
        './Button': 'src/atoms/Button',
      },
      shared: {
        react: {
          eager: true,
        },
      },
    }))
    config.resolve.plugins.push(new TsconfigPathsPlugin({
      extensions: config.resolve.extensions,
    }))

    return config
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}