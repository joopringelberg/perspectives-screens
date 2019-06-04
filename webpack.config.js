const path = require("path");

module.exports = {
  entry:
    { Perspectives: path.join(__dirname, "src/Perspectives.js" )
  },
  // output: {path: path.join(__dirname, 'public'), filename: "bundle.js"},
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd'
    },
  externals: {
    react: 'react',
    "react-bootstrap": 'react-bootstrap',
    "perspectives-proxy": "perspectives-proxy",
    "perspectives-react": "perspectives-react",
  },
  watch: false,
  mode: "development",
  target: "electron-renderer",
  plugins: [
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
