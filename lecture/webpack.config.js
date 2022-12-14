//------------- π Original Codes -------------

// const path = require('path');
// const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// const { ModuleFilenameHelpers } = require("webpack");

// module.exports = {
//   name: 'wordrelay',
//   mode: 'development', // μ€μλΉμ€: production
//   devtool: 'eval', // μ€μλΉμ€: hidden-source-map
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },

//   entry: {
//     app: ['./client'],
//   }, // μλ ₯
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


//------------- π My Codes -------------

const path = require('path'); //nodeμμ κ²½λ‘ μ½κ² μ‘°μνλλ‘ μ€

module.exports = {
  name: 'wordrelay-setting', //μ΄λ€ κ²μ μν μΉν©μΈμ§ μ΄λ¦ μ§κΈ°(optional)
  mode: 'development', //μ€μλΉμ€μμ  'production'μΌλ‘ λ°κΎΈκΈ°
  devtool: 'eval', //λΉ λ₯΄κ² νκ² λ€.
  resolve: {
    //π‘νμ₯μ μμμ μ²λ¦¬νλλ‘ μ€μ νκΈ°
    extensions: ['.js', '.jsx'] //μ΄μ  μΉν©μ΄ νμΌλͺμ .jsλ .jsxκ° μλμ§ νμΈν΄μ μμμ μ°κ²°νλ€.
  },
  
  //π μ€μν μΉκ΅¬λ€ λ±μ₯
  entry: {
    //λ€μ΄κ° ν΄λμ κ²½λ‘λ€μ λ°°μ΄λ‘ λ£μ΄μ€λ€.
    //π λ€λ₯Έ νμΌμ΄ λΆλ¬μ€κ³  μλ νμΌμ μ μ νμμλ€.
    //ex. './WordRelay.jsx'λ './client.jsx'μμμ requireλκ³  μμΌλκΉ μ μ νμμλ€.
    //π νμΌμ΄ λ§μμ§λ©΄ νμ₯μλ κ±Έλ¦¬μ κ±°λ¦°λ€. κ·Έλ΄λ π‘μμ extensionμ²λ¦¬ ν΄μ€λ€.
    app: ['./client']
  },//μλ ₯

  //babelμ κΉμ§μμΌλ©΄ μ μ ν λ‘λκ° μλ€λ μλ¬λ©μΈμ§μ ν¨κ» μλ¬κ° λ¬λ€.
  //π npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
  //μ λͺλ Ήμ΄λ‘ λ°λ²¨κ΄λ ¨μ κΉμμ€λ€.(dev-dependenciesμ)
  //coreλ babelμ κΈ°λ³Έμ μΈ λ°λ²¨, μλ λ¬Έλ²>μ΅μ λ¬Έλ²
  //preset-envλ νκ²½μ λ§κ² λ°κΏμ£Όλ κ²
  //preset-reactκ° μμ΄μΌ jsxκ°μ κ²λ€μ μ§μν  μ μλ€.
  //babel-loaderλ babelμ΄λ webpackμ μ°κ²°ν΄μ€λ€.

  //μ΄λ κ² μμ μ μΌλ©΄ μ΄ν΄νκΈ° μ’λ€.
  //entry > module μ μ© > outputμΌλ‘ λΊλ€.
  module: {
    rules: [{
      test: /\.jsx?/, //ruleμ μ μ©ν  νμΌλ€ μ€μ , jsνμΌμ΄λ jsxνμΌ μ μ©νκ² λ€.
      loader: 'babel-loader', 
      //μΉν©μ κΈ°λ³Έμ μΌλ‘ JavaScriptμ JSON νμΌλ§ μ΄ν΄νλ€.
      //But! loaderλ₯Ό μ¬μ©νλ©΄ λ€λ₯Έ μ νμ νμΌμ μ²λ¦¬νκ±°λ,
      //κ·Έλ€μ μ ν¨ν λͺ¨λλ‘ λ³νν΄ μ νλ¦¬μΌμ΄μμ μ¬μ©νκ±°λ λνλμ κ·Έλνμ μΆκ°ν  μ μλ€.
      //μ΄λ€ ruleμ μ μ©ν  κ²μΈκ°, babelμ μ΅μμ μ μ©νκ² λ€.
      options: { //babelμ μ΅μμ λ£μ΄μ€κ²μ΄λ€.
        presets: ['@babel/preset-env','@babel/preset-react'],
        //plugins: [@babel/plugin-proposal-class-properties] μ€λ₯ μλμ μμ μ
      }
    }]
  },

  output: {
    path: path.join(__dirname, 'dist'), 
    //path λͺ¨λμ μ¬μ©ν  λλ κΌ­ path μμ±μ μμμ importμμΌμ€μΌνλ€.
    //κ²½λ‘λ₯Ό ν©μ³μ€λ€. path.join(νμ¬ν΄λλͺ, outputλ€μ΄κ° νμν΄λ)
    //pcλ§λ€ κ²½λ‘κ° λ¬λΌλ μμ κ²½λ‘λ λ€ μμμ λ³μλ‘ λΆλ¬λ€μ€λ€.
    filename: 'app.js'
  },//μΆλ ₯
}
//μ€ν λ°©λ²: package.jsonμμ λͺλ Ήμ΄ μ€μ  
//"scripts": {"dev": "webpack"},
//π€ μ΄λ¬κ³  λμ npm webpackνλλ° "Unknown command"λΌκ³  λ¬λ€??
//μ΄λ΄λ πͺ npx webpackνλ©΄ μ€νλλ€.