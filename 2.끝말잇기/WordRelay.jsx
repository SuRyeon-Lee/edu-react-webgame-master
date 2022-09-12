//------------- 📝 Original Codes (Controlled input) -------------

// const React = require('react');
// const { useState, useRef } = React;

// const WordRelay = () => {
//   [word, setWord] = useState('제로초');
//   [value, setValue] = useState('');
//   [result, setResult] = useState('');
//   inputRef = useRef();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (word[word.length - 1] === value[0]){
//       setResult('딩동댕')
//       setWord(value)
//       setValue('')
//       inputRef.current.focus();
//     }else{
//       setResult('땡')
//       setValue('')
//       inputRef.current.focus();
//     }
//   }

//   const onChangeInput = (e) => {
//     setValue(e.target.value)
//   }

//   return (
//     <>
//       <div>{word}</div>
//       <form onSubmit={onSubmit}>
//         <input type="text" ref={inputRef} value={value} onChange={onChangeInput}/>
//         <button>입력!</button>
//       </form>
//       <div>{result}</div>
//     </>
//   )
// }

// module.exports = WordRelay



//------------- 📝 Fixed Codes (Uncontrolled input) -------------

const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  [word, setWord] = useState('제로초');
  [result, setResult] = useState('');
  inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // e.target[0]이나, e.target.children.word로 value에 접근
    // 💡input의 value부분이 onSubmit이란 함수 안에서만 쓸 때에는 uncontrolled input으로 사용할 수 있다.
    if (word[word.length - 1] === e.target.children.word.value[0]){
      setResult('딩동댕')
      setWord(e.target.children.word.value)
      e.target.children.word.value = ''
      inputRef.current.focus();
    }else{
      setResult('땡')
      e.target.children.word.value = ''
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        {/* 📌Controlled input = value와 onChange로 state로 제어하는 input */}
        {/* 📌Uncontrolled input = value와 onChange등이 없이 원시적으로 제어하는 기본 input */}
        {/* react에선 controlled input을 더 권장한다. */}
        {/* 실시간으로 버튼 활성화 또는 비활성화, 추천검색어 등을 업데이트 할 필요없이, submit시에서, 그 안에서만 쓰일때, 진짜 간단할때!!*/}
        {/* https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/ */}
        {/* 🛑 uncontrolled input의 초기값은 value가 아니라 defaultValue로 넣는다. */}
        <input type="text" id="word" ref={inputRef} defaultValue="defaultValue로 초기값 넣기"/>
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay