const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/assets', to: 'assets' },
      ],
    }),
  ],
};
// const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');

// module.exports = {
//   entry: {
//     app: './src/index.js',
//     'production-dependencies': ['phaser']
//   },

//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'app.bundle.js'
//   },

//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include: path.resolve(__dirname, 'src/'),
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['env']
//           }
//         }
//       }
//     ]
//   },

//   devServer: {
//     contentBase: path.resolve(__dirname, 'build'),
//   },

//   plugins: [
//     new CopyWebpackPlugin([
//       {
//         from: path.resolve(__dirname, 'index.html'),
//         to: path.resolve(__dirname, 'build')
//       },
//       {
//         from: path.resolve(__dirname, 'assets', '**', '*'),
//         to: path.resolve(__dirname, 'build')
//       }
//     ]),
//     new webpack.DefinePlugin({
//       'typeof CANVAS_RENDERER': JSON.stringify(true),
//       'typeof WEBGL_RENDERER': JSON.stringify(true)
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'production-dependencies',
//       filename: 'production-dependencies.bundle.js'
//     }),
//   ],
// }

// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');

// module.exports = {
//   mode: 'development',
//   devtool: 'inline-source-map',
//   entry: {
//     app: './src/index.js',
//   },
//   output: {
//     filename: 'app.bundle.js',
//     path: path.resolve(__dirname, 'build'),
//     clean: true,
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'build'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
// //       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         include: path.resolve(__dirname, 'src/'),
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//       {
//         test: [/\.vert$/, /\.frag$/],
//         use: 'raw-loader',
//       },
//     ],
//   },
//   plugins: [
//     new CopyPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, 'index.html'),
//           to: path.resolve(__dirname, 'dist'),
//         },
//         {
//           from: path.resolve(__dirname, 'assets', '**', '*'),
//           to: path.resolve(__dirname, 'dist'),
//         },
//       ],
//     }),
//     new webpack.DefinePlugin({
//       'typeof CANVAS_RENDERER': JSON.stringify(true),
//       'typeof WEBGL_RENDERER': JSON.stringify(true),
//     }),
//   ],
// };
