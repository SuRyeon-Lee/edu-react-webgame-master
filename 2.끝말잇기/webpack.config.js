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
        //๐ก์๋์ react-refresh ๋ฃ์ด์ฃผ๋ฉด babel์ด ์ต์ ๋ฌธ๋ฒ์ ์๋  ์๋ฐ์คํฌ๋ฆฝํธ๋ก
        //๋ฐ๊ฟ ๋์ hot reloadong ๊ธฐ๋ฅ๊น์ง ์ถ๊ฐํด์ค๋ค.
        //๋ฆฌ์กํธ๋ ์๋ ๋ณ๊ฒฝ๋๋ฉด ์๋์ผ๋ก ์๋ก๊ณ ์นจ ์์ผ์ฃผ๋๋ฐ? ํ  ์ ์๋๋ฐ
        //hot reloading์ ๊ธฐ์กด ๋ฐ์ดํฐ๋ฅผ ์ ์งํ๋ฉด์ ์๋ก๊ณ ์นจ์์ผ์ฃผ๋ ๊ฑฐ๋ผ ๋ค๋ฅด๋ค.
        plugins: ['react-refresh/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    //๐กํ๋ฌ๊ทธ์ธ ์ฅ์ฐฉ! ์์ผ๋ก buildํ  ๋๋ง๋ค ์ด ๋ถ๋ถ์ด ์คํ๋๋ค.
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    //๐ก๊ฐ๋ฐ ์๋ฒ ํ์ธ
    //output์ public path๋ฅผ ๊ทธ๋๋ก ๋ฐ์ ๋ฐ๋ผ์ฐ๊ธฐ
    //์ด๋ ๊ฒ ์ค์ ํด์ฃผ๊ณ  npm run devํ๋ฉด localhost:8080์์ ํ์ธํ  ์ ์๊ณ , 
    //์๋์ ์ผ๋ก ๋ณ๊ฒฝ์ ์ ๊ฐ์ํ๊ณ  reloadingํด์ค๋ค.
    //์ด์  ์์ ์ฌํญ์ด ๋ฐ์ํ๋ฉด ์๋์ผ๋ก ๋ฐ์ดํฐ๋ ์ ์งํ๋ฉด์ ๋ณ๊ฒฝ์ ์ ์๋ก๊ณ ์นจ ์์ผ์ ๋ฐ์ํด์ค๋ค.
    devMiddleware: { publicPath: '/dist' }, //webpack-dev-server๊ฐ ์ฌ์ฉํ๋ ๊ฒฐ๊ณผ๋ฌผ๊ฐ์ ์๋๊ฒฝ๋ก
    //static์ ์ค์ฌ๋ก ์กด์ฌํ๋ ์ ์  ํ์ผ๋ค์ ์ ๋ณด๋ฅผ ์ ๋๋ค.
    //์ง๊ธ์ index.html์ด ๊ฐ์ ๋๋ ํ ๋ฆฌ์ ์์ด์ ์ด๋ ๊ฒ๋ง ์ ๋๋ค.
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};
