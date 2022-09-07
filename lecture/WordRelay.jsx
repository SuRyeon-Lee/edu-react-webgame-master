//------------- 📝 Original Codes -------------

// const React = require('react');
// const { useState } = require('react');

// const WordRelay = () => {
//   const [word, setWord] = useState('제로초!');
//   const [value, setValue] = useState('');
//   const [result, setResult] = useState('');
//   const inputEl = React.useRef(null);

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     if (word[word.length - 1] === value[0]) {
//       setResult('딩동댕');
//       setWord(value);
//       setValue('');
//       inputEl.current.focus();
//     } else {
//       setResult('땡');
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
//         <button>입력!</button>
//       </form>
//       <div>{result}</div>
//     </>
//   );
// };

// module.exports = WordRelay;


//------------- 📝 My Codes -------------

const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  //이 부분에서 나는 에러 안나는데 babel에러가 날 경우 
  //npm i -D @babel/plugin-proposal-class-properties 해줘야 함
  state = {
    text : "Hello,webpack"
  };

  render(){
    return <h1>{this.state.text}</h1>
  }
}

module.exports = WordRelay