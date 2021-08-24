const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/client/App.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react'
                    ]
                }
            }]
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'src\\client\\index.html',
        })
    ],
    devServer: {
        port: 8000,
        historyApiFallback: true,
        hot: true,
    },
};