//------------- ๐ Original Codes -------------

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



//------------- ๐ My Codes -------------
//์์  ์ฒด์  + ์ถ๊ฐ

const path = require('path');
const webpack = require('webpack');

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
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        // preset์ plugin์ ๋ชจ์
        //'@babel/preset-env'์์๋ ์์ญ๊ฒ์ ํ๋ฌ๊ทธ์ธ๋ค์ด ํฉ์ณ์ ธ ์๋ค.
        // preset์๋ ์ค์ ์ ์ ์ฉํ  ์ ์๋ค.
        // ['ํ๋ฆฌ์ ์ด๋ฆ', {์ค์ }]
        // ์๋  ๋ฌธ๋ฒ ๋๋ฌด ๋ฐ๊พธ๋ ค๋ฉด babel ์ผ์ด ๋ง์์ ธ์ ๋๋ฌด ๋๋ ค์ง๋ค.
        presets: [
          ['@babel/preset-env',{
            targets: { 
              //์๋์ผ๋ก ์๋ ๋ธ๋ผ์ฐ์  ์ง์ํ๋๋ฐ, ๊ทธ๊ฑธ ์ข๋ ๊ตฌ์ฒด์ ์ผ๋ก ์จ์ค
              //์์๋ก ์๋์ ๊ฐ์ด ์จ์ฃผ๋ฉด ํฌ๋กฌ์ ์ต๊ทผ ๋๊ฐ ๋ฒ์ ๋ง ํธํ๋๋ค.
              //๐๊ฐ๊ฟ-https://github.com/browserslist/browserslist
              browsers: ['> 5% in KR'] //ํ๊ตญ์์ 5% ์ด์์ธ ๋ธ๋ผ์ฐ์  ๋ชจ๋ ์ง์, ํ์ฌ ์๊ตฌ์ฌํญ ๋ง์ถ๊ธฐ ์์ฃผ ์ข์
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [], //๋ฏธ๋ฆฌ ๋ง์ ๊ฒ์ ๋ค์ด๋ฐ์ ๋์ง๋ง๊ณ , ์ค๋ฅ๊ฐ ๋๋ฉด ๋ฉ์ธ์ง ์ฝ๊ณ  ๋ค์ด๋ฐ๋ ๊ฐ ํ๋ค.
        //debug: true, //๐ก
      }
    }]
  },
  //๋ชจ๋์ด๋ rules์ธ์ ์ถ๊ฐ์ ์ผ๋ก ํ๊ณ  ์ถ์ผ๋ฉด ์ฌ๊ธฐ plugin์ ๋ถ์ธ๋ค.
  plugins: [
    //์์์ ์ค์ ํ loader์ options์ debug:trure๋ฃ์ด์ฃผ๋๋ก ํจ ๐ก์ฐธ๊ณ 
    new webpack.LoaderOptionsPlugin({debug:true}), 
  ],
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'app.js'
  }
}