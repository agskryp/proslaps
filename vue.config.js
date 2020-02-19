//const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        "/Users/ag87/_WebDev/_GitHubProjects/paper-rock-scissor/src/styles/main.scss"
      ]
    }
  },

  configureWebpack: {
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        minSize: 0,
        maxInitialRequests: Infinity,
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    },
    devtool: false,

    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js", ".css");
      }
    }
  }
};
