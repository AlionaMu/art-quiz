const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   // context: path.resolve(__dirname, 'src'),
    entry: {
      main: './src/index.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        /** Будет запускать сервер на localhost:8080 в этой папке*/
        open: true,
        port: 8080,
        //contentBase: path.join(__dirname, 'public'),
        /*static: {
          directory: path.resolve(__dirname, 'public'),
        },*/
    },
   /* watch: true,*/
    output: {
      filename: '[name].[contenthash].js', // динамичное и уникальное имя файла
      path: path.resolve(__dirname, './dist'),
      clean: true, // для очистки папки dist при новом билде
    },
    module: {
        rules: [
            /** Babel **/
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              },
            
                // npm install babel-loader @babel/core @babel/preset-env -D
            },
            /** CSS */
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                // npm i style-loader css-loader -D
            },
            /** SCSS/SAAS */
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                // npm i style-loader css-loader sass sass-loader -D
            },
            /** Картинки */
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            /** Шрифты */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {    //  test: /\.png/,
              test: /\.(mp3|wav)$/,
              type: 'asset/resource',
            },
            {  
              test: /\.json$/i,
              type: 'asset/resource',
            },
        ]
      },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'public'  }  
         // noErrorOnMissing: true,
        ]
      })
  ],
};