const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  entry:
    { System: path.join(__dirname, "src/System.js" )
    , SimpleChat: path.join(__dirname, "src/SimpleChat.js" )
    , ModelManagement: path.join(__dirname, "src/ModelManagement.js" )
    , BrokerServices:  path.join(__dirname, "src/BrokerServices.js" )
    , Competition: path.join(__dirname, "src/Competition.js" )
    , CouchdbManagement: path.join(__dirname, "src/CouchdbManagement.js")
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
  target: "web",
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
