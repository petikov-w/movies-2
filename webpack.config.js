const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// require('dotenv').config({ path: './.env' })
const Dotenv = require('dotenv-webpack')

//import { DefinePlugin } from 'webpack'
//config({path: __dirname + '/.env.*'});

const production = process.env.NODE_ENV === 'production';


module.exports = {
    entry: { MoviesApp: path.resolve(__dirname, "./src/index.js") },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: production ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !production
                        }
                    }
                ]
            },

        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack & React",
            template: "./src/index.html",
            favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
        new Dotenv({
            // path: `./.env${env.file ? `.${env.file}` : ''}`,
            systemvars: true
        }),
        // new webpack.DefinePlugin({
        //     "process.env": JSON.stringify(process.env),
        //     //API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY)
        // }),
    ],
    devServer: {
        port: 3001
    },
    mode: production ? 'production' : 'development'
};