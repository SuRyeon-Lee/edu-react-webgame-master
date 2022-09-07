const React = require('react');
// const ReactDom = require('react-dom');
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const WordRelay = require('./WordRelay');

// ReactDom.render(<WordRelay />, document.querySelector('#root')); 옛날 문법
root.render(<WordRelay />);
