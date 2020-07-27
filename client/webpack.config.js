const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

const getPath = (...subpath) => path.resolve(__dirname, ...(subpath || [""]));

module.exports = function () {
  const isDevelopment = process.env.NODE_ENV !== "production";
  return {
    mode: isDevelopment ? "development" : "production",
    target: "web",
    devtool: isDevelopment ? "inline-source-map" : "source-map",
    entry: ["react-hot-loader/patch", getPath("src", "index.js")],
    module: {
      rules: getLoaders(isDevelopment),
    },
    resolve: {
      alias: isDevelopment
        ? { "react-dom": "@hot-loader/react-dom" }
        : undefined,
    },
    output: {
      filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
      path: getPath("build"),
    },
    watch: isDevelopment,
    devServer: {
      contentBase: getPath("build"),
      historyApiFallback: true,
      hot: true,
      publicPath: "/",
      quiet: true,
      watchOptions: {
        aggregateTimeout: 500,
      },
    },
    optimization: {
      minimizer: [new TerserWebpackPlugin(), new OptimizeCSSAssetsPlugin()],
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[/\\]node_modules[/\\]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    plugins: getPlugins(isDevelopment),
  };
};

function getLoaders(isDevelopment) {
  const babelLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
  };
  const cssLoader = {
    test: /\.css$/,
    oneOf: [
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              localsConvention: "camelCase",
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: getPath(),
              },
            },
          },
        ],
      },
    ],
  };
  const fileLoader = {
    test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  };
  return [babelLoader, cssLoader, fileLoader];
}

function getPlugins(isDevelopment) {
  return [
    new HtmlWebpackPlugin({
      template: getPath("public", "index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
    }),
  ];
}
