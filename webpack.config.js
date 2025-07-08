const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Use "production" for optimized builds
  entry: "./src/index.js", // Main entry point for your app
  output: {
    filename: "main.js", // Output bundle name
    path: path.resolve(__dirname, "dist"), // Output folder
    clean: true, // Clears dist before each build
  },
  devtool: "eval-source-map", // Helpful for debugging
  devServer: {
    static: "./dist", // Serve from the dist folder
    watchFiles: ["./src/template.html"], // Watch for changes in template
    open: true, // Open in browser automatically
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // HTML template
    }),
  ],
  module: {
    rules: [
      // CSS Loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Order matters!
      },
      // HTML Loader
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Image Asset Loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};