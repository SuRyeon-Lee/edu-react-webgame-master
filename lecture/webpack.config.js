//------------- 📝 Original Codes -------------

// const path = require('path');
// const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// const { ModuleFilenameHelpers } = require("webpack");

// module.exports = {
//   name: 'wordrelay',
//   mode: 'development', // 실서비스: production
//   devtool: 'eval', // 실서비스: hidden-source-map
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },

//   entry: {
//     app: ['./client'],
//   }, // 입력
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
//         plugins: [
//           '@babel/plugin-proposal-class-properties',
//           'react-refresh/babel',
//         ],
//       },
//     }],
//   },
//   plugins: [
//     new RefreshWebpackPlugin()
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'app.js',
//     publicPath: '/dist/',
//   },
//   devServer: {
//     devMiddleware: { publicPath: '/dist' },
//     static: { directory: path.resolve(__dirname) },
//     hot: true
//   },
// };


//------------- 📝 My Codes -------------

const path = require('path'); //node에서 경로 쉽게 조작하도록 줌

module.exports = {
  name: 'wordrelay-setting', //어떤 것을 위한 웹팩인지 이름 짓기(optional)
  mode: 'development', //실서비스에선 'production'으로 바꾸기
  devtool: 'eval', //빠르게 하겠다.
  resolve: {
    //💡확장자 알아서 처리하도록 설정하기
    extensions: ['.js', '.jsx'] //이제 웹팩이 파일명에 .js나 .jsx가 있는지 확인해서 알아서 연결한다.
  },
  
  //📌 중요한 친구들 등장
  entry: {
    //들어갈 폴더의 경로들을 배열로 넣어준다.
    //🛑 다른 파일이 불러오고 있는 파일은 적을 필요없다.
    //ex. './WordRelay.jsx'는 './client.jsx'안에서 require되고 있으니까 적을 필요없다.
    //🛑 파일이 많아지면 확장자도 걸리적거린다. 그럴땐 💡에서 extension처리 해준다.
    app: ['./client']
  },//입력

  //babel을 깔지않으면 적절한 로더가 없다는 에러메세지와 함께 에러가 뜬다.
  //📌 npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
  //위 명령어로 바벨관련을 깔아준다.(dev-dependencies임)
  //core는 babel의 기본적인 바벨, 옛날문법>최신문법
  //preset-env는 환경에 맞게 바꿔주는 것
  //preset-react가 있어야 jsx같은 것들을 지원할 수 있다.
  //babel-loader는 babel이랑 webpack을 연결해준다.

  //이렇게 순서 적으면 이해하기 좋다.
  //entry > module 적용 > output으로 뺀다.
  module: {
    rules: [{
      test: /\.jsx?/, //rule을 적용할 파일들 설정, js파일이나 jsx파일 적용하겠다.
      loader: 'babel-loader', //어떤 rule을 적용할 것인가, babel의 옵션을 적용하겠다.
      options: { //babel의 옵션을 넣어줄것이다.
        presets: ['@babel/preset-env','@babel/preset-react'],
        //plugins: [@babel/plugin-proposal-class-properties] 오류 안나서 안적음
      }
    }]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    //경로를 합쳐준다. path.join(현재폴더명, output들어갈 하위폴더)
    //pc마다 경로가 달라도 앞의 경로는 다 알아서 변수로 불러다준다.
    filename: 'app.js'
  },//출력
}
//실행 방법: package.json에서 명령어 설정 
//"scripts": {"dev": "webpack"},
//🤔 이러고 나서 npm webpack했는데 "Unknown command"라고 뜬다??
//이럴때 🪄 npx webpack하면 실행된다.