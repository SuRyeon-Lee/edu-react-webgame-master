const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  [word, setWord] = useState('제로초');
  [value, setValue] = useState('');
  [result, setResult] = useState('');
  inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]){
      setResult('딩동댕')
      setWord(value)
      setValue('')
      inputRef.current.focus();
    }else{
      setResult('땡')
      setValue('')
      inputRef.current.focus();
    }
  }

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} value={value} onChange={onChangeInput}/>
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay