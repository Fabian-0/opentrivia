const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'frontend'),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_moduls/,
        use: {
          loader:'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html")
  })],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
}