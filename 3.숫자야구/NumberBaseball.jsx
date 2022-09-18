import React, {useRef, useState, useCallback} from 'react';
/*
  📌 중괄호로 가져오는건 뭐고 그냥 가져오는 건 뭘까?
  
  defalut로 export하면 그냥 import시키고
  default로 export 안 한 애들은 중괄호{}싸서 import 시켜야 한다.

  예시)
  export const hello = 'hello' --> import {hello}
  export default NumberBasball --> import NumberBaseball

  export default와 그냥 export를 한 파일에서 같이 쓸 수는 있다.
  하지만! 
  export는 여러번 쓸 수 있지만, export default는 한파일에 한번만 쓸 수 있다는 차이가 있다. 
*/
import Try from "./Try";

/*
  📌 import와 require의 차이

  require은 노드의 모듈시스템이다. (common.js)
  내보낼 파일에서: module.exports = 바깥으로 내보낼 클래스나 함수의 이름;
  받을 파일에서: const 클래스이름 = require('받아올 경로')
  +추가로 노드 모듈시스템에서
  module.exports = {hello: 'a'}
  exports.hello = 'a'
  위 둘은 같다.

  import es2015의 모듈시스템이다.
  내보낼 파일에서: export default 바깥으로 내보낼 클래스나 함수의 이름;
  받을 파일에서: import 클래스변수 from '경로'


  이 둘은 다르지만, 일부 호환이 되기 때문에, 위의 import문을 require로 바꾸어도 돌아간다.
  다만, import는 한번에 여러개를 받아올 수 있어서

  const React = require('react');
  const {useRef, useState, useCallback} = React;
  이렇게 나누지 않고

  import React, {useRef, useState, useCallback} 이렇게 한번에 가져올 수 있다.
  따라서 import가 좀더 깔끔해서 자주 쓰인다.

  기본적으로 node로 웹팩을 돌리는데,
  node에서는 노드 문법 require만 지원하지만,
  웹팩돌리면서 중간에 바벨이 import > require로 바꿔줬기 때문
  (같은 맥락으로 webpack.config.js는 노드가 돌리기 땜에 꼭!! require를 써야한다.)
*/


const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setTries((t) => ([
        ...t,
        {
          try: value,
          result: '홈런!',
        }
      ]));
      setResult('홈런!');
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();
      } else {
        console.log('답은', answer.join(''));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            console.log('strike', answerArray[i], answer[i]);
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
            ball += 1;
          }
        }
        setTries(t => ([
          ...t,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          }
        ]));
        setValue('');
        inputEl.current.focus();
      }
    }
  }, [value, answer]);

  const onChangeInput = useCallback((e) => setValue(e.target.value), []);

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v}/>
        ))}
      </ul>
    </>
  );
};

export default NumberBaseball;
