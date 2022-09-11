const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-dev',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['last 2 chrome versions']},
            debug: true,
          }],
          '@babel/preset-react',
        ],
        //💡아래의 react-refresh 넣어주면 babel이 최신문법을 옛날 자바스크립트로
        //바꿀 때에 hot reloadong 기능까지 추가해준다.
        //리액트는 원래 변경되면 자동으로 새로고침 시켜주는데? 할 수 있는데
        //hot reloading은 기존 데이터를 유지하면서 새로고침시켜주는 거라 다르다.
        plugins: ['react-refresh/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    //💡플러그인 장착! 앞으로 build할 때마다 이 부분이 실행된다.
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    //💡개발 서버 확인
    //output의 public path를 그대로 밑에 따라쓰기
    //이렇게 설정해주고 npm run dev하면 localhost:8080에서 확인할 수 있고, 
    //자동적으로 변경점을 감시하고 reloading해준다.
    //이제 수정사항이 발생하면 자동으로 데이터는 유지하면서 변경점은 새로고침 시켜서 반영해준다.
    devMiddleware: { publicPath: '/dist' }, //webpack-dev-server가 사용하는 결과물간의 상대경로
    //static에 실재로 존재하는 정적 파일들의 정보를 적는다.
    //지금은 index.html이 같은 디렉토리에 있어서 이렇게만 적는다.
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};
