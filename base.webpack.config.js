const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const { ModuleFederationPlugin } = webpack.container;

module.exports = (port) => ({
    entry: "./src/entry.js",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        port: port,
        // open: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: "ts-loader",
            },
            {
                test: /\.svg/,
                loader: "svg-url-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: "federated",
            remotes: {
                components: "components@//localhost:9000/__remote/entry.js",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: false,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: false,
                },
            },
        }),
    ],
});
