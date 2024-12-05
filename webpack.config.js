// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for JS
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output file
    clean: true, // Clean the output folder before each build
  },
  mode: "development", // Can also be 'production'
  devServer: {
    static: "./dist",
    port: 3000, // Serve on localhost:3000
    open: true, // Open browser automatically
  },
  module: {
    rules: [
      // JavaScript Loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Babel presets to compile ES6+
          },
        },
      },
      // SASS Loader
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate file
          "css-loader", // Turn CSS into CommonJS
          "sass-loader", // Turn SASS into CSS
        ],
      },
      // **New CSS loader rule** (for plain CSS files)
      {
        test: /\.css$/, // Target .css files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into a file
          "css-loader", // Load CSS files
        ],
      },
      // HTML Loader
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use this HTML as a template
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css", // Extracted CSS file name
    }),
  ],
};
