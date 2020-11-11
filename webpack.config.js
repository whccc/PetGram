const HtmlWebpackPlugin =
    require('html-webpack-plugin');

module.export = {
  entry: './src/index.js',
  output: {
    filename: "app.blunde.js"
  },
  devServer: {
    host: '192.168.1.56',
    port: 3001,
    contentBase: ':/dist',
    disableHostCheck: true,
    stats: { 
        colors: true 
    },
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html"
    })
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
    use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
    }
        ]
    }
}
