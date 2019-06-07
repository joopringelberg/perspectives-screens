const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  entry:
    { Perspectives: path.join(__dirname, "src/Perspectives.js" )
  },
  output: {
      filename: 'screens.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'var',
      library: "LIB"
    },
  externals:
    { react: 'React'
    , "perspectives-react": 'PerspectivesReact'
    // , "react-dom": "ReactDOM"
    // , "react-bootstrap": 'react-bootstrap',
    // , "perspectives-proxy": "perspectives-proxy",
  },
  watch: false,
  mode: "development",
  target: "electron-renderer",
  plugins: [
    new EsmWebpackPlugin()
    ],
  module: {
    rules: [
      {
        test: /\.crl$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.html$/,
        loader: 'ignore-loader'
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', "@babel/preset-react"],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
      Public: path.resolve( __dirname, "public")
    },
    symlinks: false
  }
};
