const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
    },
    devServer: {
        open: true,
        host: 'localhost',
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".jsx", ".json"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
          }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: require.resolve("babel-loader"),
                exclude: /node_modules/,
              },
        ],
    },
};
