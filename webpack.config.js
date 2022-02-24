const HtmlWebpackPlugin=require('html-webpack-plugin');
const path=require('path');

module.exports={
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    proxy: {
        '/': 'http://localhost:8080'
    }
    },
    module:{
      rules:[
        {
          test:/\.js$/,
          exclude:/node_modules/,
          use:{
            loader:'babel-loader',
            options:{
              presets:'babel-preset-react'
            }
          }
        },
        {
          test:/\.css$/,
          //A ordem importa :)
          use:['style-loader','css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use:[
            {
            loader: 'file-loader',
            }]
        },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        })
      ]
    
}