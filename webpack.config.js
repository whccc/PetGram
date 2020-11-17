const HtmlWebpackPlugin =
  require('html-webpack-plugin');
const path = require('path');



module.exports={
  entry:"./src/index.js",
  output:{
      path:path.join(__dirname,'build'),
      filename:'blunde.js'
  },
  devServer:{
      host:'192.168.1.56',
      port:3001,
      contentBase:':/dist',
      disableHostCheck:true,
      stats:{colors:true},
      historyApiFallback:true
  },
  resolve:{
      extensions: ['.js','.jsx']
  },
  module:{
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: [/node_modules/],
              use: ['babel-loader']
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
  ]
}