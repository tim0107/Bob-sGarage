const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {
      fs: false,   // Exclude fs as it's not used in the browser
      crypto: false, // Exclude crypto if not needed in the client
      path: false, // Exclude path if not needed in the client
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^pg-hstore$/,
    }),
  ],
};
