const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));

// 핫 리로딩: npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D
// 개발용 서버: npm i -D webpack-dev-server
// package.jsond에서....
// "scripts": {
       //기존엔 "dev": "webpack-dev-server --hot"
       // 아래와 같이 바뀜
//     "dev": "webpack serve --env development"
//   },