//------------- π Original Codes -------------

// const React = require('react');
// const { useState } = require('react');

// const WordRelay = () => {
//   const [word, setWord] = useState('μ λ‘μ΄!');
//   const [value, setValue] = useState('');
//   const [result, setResult] = useState('');
//   const inputEl = React.useRef(null);

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     if (word[word.length - 1] === value[0]) {
//       setResult('λ©λλ');
//       setWord(value);
//       setValue('');
//       inputEl.current.focus();
//     } else {
//       setResult('λ‘');
//       setValue('');
//       inputEl.current.focus();
//     }
//   };

//   return (
//     <>
//       <div>{word}</div>
//       <form onSubmit={onSubmitForm}>
//         <input
//           ref={inputEl}
//           value={value}
//           onChange={(e) => setValue(e.currentTarget.value)}
//         />
//         <button>μλ ₯!</button>
//       </form>
//       <div>{result}</div>
//     </>
//   );
// };

// module.exports = WordRelay;


//------------- π My Codes -------------

const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  //μ΄ λΆλΆμμ λλ μλ¬ μλλλ° babelμλ¬κ° λ  κ²½μ° 
  //npm i -D @babel/plugin-proposal-class-properties ν΄μ€μΌ ν¨
  state = {
    text : "Hello,webpack"
  };

  render(){
    return <h1>{this.state.text}</h1>
  }
}

module.exports = WordRelay