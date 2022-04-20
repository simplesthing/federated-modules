const { dependencies } = require('../package.json');

module.exports = {
    name: 'remote',
    filename: 'remoteEntry.js',
    exposes: {
        './Button': './src/atoms/Button',
    },
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            requiredVersion: dependencies['react'],
            eager: true,
        },
        'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
            eager: true,
        },
    },
};
