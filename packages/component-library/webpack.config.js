const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    module: {
        rules: [{
            loader: "babel-loader",
            options: {
                rootMode: "upward",
            },
        },]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app_one_remote",
            remotes: {
                app_two: "app_two_remote",
                app_three: "app_three_remote"
            },
            exposes: {
                'AppContainer': './src/App'
            },
            shared: ["react", "react-dom", "react-router-dom"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            chunks: ["main"]
        })
    ]
}