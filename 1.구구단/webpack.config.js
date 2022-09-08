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



//------------- 📝 My Codes -------------
//숙제 체점 + 추가

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
        // preset은 plugin의 모음
        //'@babel/preset-env'안에도 수십게의 플러그인들이 합쳐져 있다.
        // preset에도 설정을 적용할 수 있다.
        // ['프리셋 이름', {설정}]
        // 옛날 문법 너무 바꾸려면 babel 일이 많아져서 너무 느려진다.
        presets: [
          ['@babel/preset-env',{
            targets: { 
              //자동으로 옛날브라우저 지원하는데, 그걸 좀더 구체적으로 써줌
              //예시로 아래와 같이 써주면 크롬의 최근 두개 버전만 호환된다.
              //🌟개꿀-https://github.com/browserslist/browserslist
              browsers: ['> 5% in KR'] //한국에서 5% 이상인 브라우저 모두 지원, 회사 요구사항 맞추기 아주 좋음
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [], //미리 많은 것을 다운받아 놓지말고, 오류가 나면 메세지 읽고 다운받든가 한다.
        //debug: true, //💡
      }
    }]
  },
  //모듈이나 rules외에 추가적으로 하고 싶으면 여기 plugin에 붙인다.
  plugins: [
    //위에서 설정한 loader에 options에 debug:trure넣어주도록 함 💡참고
    new webpack.LoaderOptionsPlugin({debug:true}), 
  ],
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'app.js'
  }
}