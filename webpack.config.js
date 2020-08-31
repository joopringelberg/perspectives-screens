const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  entry:
    { System: path.join(__dirname, "src/System.js" )
    , TestBotActie: path.join(__dirname, "src/TestBotActie.js" )
    , SimpleChat: path.join(__dirname, "src/SimpleChat.js" )
  },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'var',
      library: "perspectivesScreens"
    },

  externals:
    { "react": "React"
    , "react-dom": "ReactDOM"
    , "react-bootstrap": "ReactBootstrap"
    , "@primer/octicons-react": "PrimerOcticonsReact"
    , "prop-types": "PropTypes"
    , "perspectives-react": 'PerspectivesReact'
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
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import'
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
  }
};
