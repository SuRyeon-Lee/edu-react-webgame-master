//------------- 📝 Original Codes -------------

// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   mode: 'development',
//   devtool: 'inline-source-map', // hidden-source-map
//   resolve: {
//     extensions: ['.jsx', '.js'],
//   },

//   entry: {
//     app: './client',
//   },
//   module: {
//     rules: [{
//       test: /\.jsx?$/,
//       loader: 'babel-loader',
//       options: {
//         presets: [
//           ['@babel/preset-env', {
//             targets: {
//               browsers: ['> 1% in KR'], // browserslist
//             },
//             debug: true,
//           }],
//           '@babel/preset-react',
//         ],
//         plugins: [],
//       },
//     }],
//   },
//   output: {
//     filename: 'app.js',
//     path: path.join(__dirname, 'dist'),
//   },
// };



//------------- 📝 My Homework -------------
//lecture > webpack.config.js 참고해서 동일하게 작성해보기

const path = require('path');

module.exports = {
  name: 'Gugudan-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js','.jsx']
  },

  entry: {
    app: ['./client']
  },

  module: {
    rules:[{
      test: /\.jsx/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env','@babel/preset-react'],
      }
    }]
  },

  output: {
    path: path.join(__dirname,'dist'),
    filename: 'app.js'
  }
}