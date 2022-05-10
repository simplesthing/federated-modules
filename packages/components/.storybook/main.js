const {
  withStorybookModuleFederation,
} = require('storybook-module-federation');

// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const deps = require('../package.json').dependencies;
const federationConfig = require('../federation.config.json')


module.exports = withStorybookModuleFederation({
  ...federationConfig,
  filename: 'remoteEntry.js',
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
    },
  },
})({
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
});
