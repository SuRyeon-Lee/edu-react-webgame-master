//------------- 📝 Original Codes -------------
// import React, {useRef, useState, useCallback} from 'react';
// /*
//   📌 중괄호로 가져오는건 뭐고 그냥 가져오는 건 뭘까?
  
//   defalut로 export하면 그냥 import시키고
//   default로 export 안 한 애들은 중괄호{}싸서 import 시켜야 한다.

//   예시)
//   export const hello = 'hello' --> import {hello}
//   export default NumberBasball --> import NumberBaseball

//   export default와 그냥 export를 한 파일에서 같이 쓸 수는 있다.
//   하지만! 
//   export는 여러번 쓸 수 있지만, export default는 한파일에 한번만 쓸 수 있다는 차이가 있다. 
// */
// import Try from "./Try";

// /*
//   📌 import와 require의 차이

//   require은 노드의 모듈시스템이다. (common.js)
//   내보낼 파일에서: module.exports = 바깥으로 내보낼 클래스나 함수의 이름;
//   받을 파일에서: const 클래스이름 = require('받아올 경로')
//   +추가로 노드 모듈시스템에서
//   module.exports = {hello: 'a'}
//   exports.hello = 'a'
//   위 둘은 같다.

//   import es2015의 모듈시스템이다.
//   내보낼 파일에서: export default 바깥으로 내보낼 클래스나 함수의 이름;
//   받을 파일에서: import 클래스변수 from '경로'


//   이 둘은 다르지만, 일부 호환이 되기 때문에, 위의 import문을 require로 바꾸어도 돌아간다.
//   다만, import는 한번에 여러개를 받아올 수 있어서

//   const React = require('react');
//   const {useRef, useState, useCallback} = React;
//   이렇게 나누지 않고

//   import React, {useRef, useState, useCallback} 이렇게 한번에 가져올 수 있다.
//   따라서 import가 좀더 깔끔해서 자주 쓰인다.

//   기본적으로 node로 웹팩을 돌리는데,
//   node에서는 노드 문법 require만 지원하지만,
//   웹팩돌리면서 중간에 바벨이 import > require로 바꿔줬기 때문
//   (같은 맥락으로 webpack.config.js는 노드가 돌리기 땜에 꼭!! require를 써야한다.)
// */


// const getNumbers = () => {
//   const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const array = [];
//   for (let i = 0; i < 4; i += 1) {
//     const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//     array.push(chosen);
//   }
//   return array;
// };

// const NumberBaseball = () => {
//   const [answer, setAnswer] = useState(getNumbers());
//   const [value, setValue] = useState('');
//   const [result, setResult] = useState('');
//   const [tries, setTries] = useState([]);
//   const inputEl = useRef(null);

//   const onSubmitForm = useCallback((e) => {
//     e.preventDefault();
//     if (value === answer.join('')) {
//       setTries((t) => ([
//         ...t,
//         {
//           try: value,
//           result: '홈런!',
//         }
//       ]));
//       setResult('홈런!');
//       alert('게임을 다시 실행합니다.');
//       setValue('');
//       setAnswer(getNumbers());
//       setTries([]);
//       inputEl.current.focus();
//     } else {
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) {
//         setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
//         alert('게임을 다시 시작합니다.');
//         setValue('');
//         setAnswer(getNumbers());
//         setTries([]);
//         inputEl.current.focus();
//       } else {
//         console.log('답은', answer.join(''));
//         for (let i = 0; i < 4; i += 1) {
//           if (answerArray[i] === answer[i]) {
//             console.log('strike', answerArray[i], answer[i]);
//             strike += 1;
//           } else if (answer.includes(answerArray[i])) {
//             console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
//             ball += 1;
//           }
//         }
//         setTries(t => ([
//           ...t,
//           {
//             try: value,
//             result: `${strike} 스트라이크, ${ball} 볼입니다.`,
//           }
//         ]));
//         setValue('');
//         inputEl.current.focus();
//       }
//     }
//   }, [value, answer]);

//   const onChangeInput = useCallback((e) => setValue(e.target.value), []);

//   return (
//     <>
//       <h1>{result}</h1>
//       <form onSubmit={onSubmitForm}>
//         <input
//           ref={inputEl}
//           maxLength={4}
//           value={value}
//           onChange={onChangeInput}
//         />
//         <button>입력!</button>
//       </form>
//       <div>시도: {tries.length}</div>
//       <ul>
//         {tries.map((v, i) => (
//           <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v}/>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default NumberBaseball;


//------------- 📝 직접 Class > Hooks로 바꿔보기 -------------
import React, { useState } from 'react';
import Try from './Try';

function getNumbers(){ 
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i += 1){
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}
/* 중요!
  📌 props를 사용하면 안좋을 수 있는 문제
  렌더링이 자주 일어나서 성능이 안좋아 질 수 있다.
  그런 문제를 찾아내는 방법과 해결하는 방법을 알아보자!!

  react dev tools 콘솔에서 > 톱니바퀴 > 
  'Highlight updates when components render.' 체크박스 체크
  이렇게 체크해놓고 브라우저에서 체크하면 렌더링 되는 부분마다
  하늘색으로 반짝 거린다.
  그리고 렌더링이 빠른시간에 많이 일어날 수록 브라우저 상단 끝 라인이 빨개진다.
  파랑 > 초록 > 노랑 > 빨강 순으로 안좋아짐.
  
  내가 입력한 값이 어떤 상관없는 컴포넌트를 리랜더링하고 있는지 한눈에 파악할 수 있다.
*/

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  //함수 컴포넌트 특성상 매번 리랜더링 될 때마다 전체 NumberBaseball 함수가 실행된다.
  //지금 아래의 코드에서 getNumbers()는 
  //매번 실행되기는 하지만, 처음 한번만 적용되기 때문에 문제가 없어 보인다.
  // ❌ const [answer, setAnswer] = useState(getNumbers());
  //하지만 사실 매번 랜더링마다 getNumbers()를 실행하게 되고,
  //다만 state기본값만 처음에 넣어주는 거라서 실행된 결과값이 state로 적용되지 않는 것 뿐이다.

  //이럴 때는 useState자리에 함수의 호출이 아니라, 함수 자체를 넣어준다.
  //이렇게 넣으면 함수의 리턴 값이 state로 들어가고 그 다음부터는 함수가 실행되지 않는다.
  const [answer, setAnswer] = useState(getNumbers); 
  //💡 이렇게 함수가 처음 호출되서 리턴값을 돌려줄때까지 리액트가 기다려 주는 것을
  //lazy init이라고 부른다.

  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => { 
    e.preventDefault();
    if(value === answer.join('')){
      setResult('홈런!');
      //🛑 Hooks에서도 옛날 값을 응용하여 현재 값을 바꿀 땐, 함수형 setState
      // 그래야 state 연달아 바꿀때 문제가 안생김
      setTries((prevTries) => {
        return [...prevTries.tries, {try: value, result:'홈런!'}]
      })
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers()); //🛑 이런 데에선 lazy init쓸 수 없다!! useState에서만 lazy init
      setTries([]);
    } else { //답 틀렸으면
      const answerArray = value.split('').map((v)=>parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9){ //10번 이상 틀렸을 때

        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`)
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers()) //🛑 이런 데에선 lazy init쓸 수 없다!! useState에서만 lazy init
        setTries([]);

      } else { //10번 이내로 틀렸을 때
        for(let i = 0; i < 4; i ++){
          if(answerArray[i] === answer[i]){
            strike += 1;
          }else if(answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        //🛑 Hooks에서도 옛날 값을 응용하여 현재 값을 바꿀 땐, 함수형 setState
        // 그래야 state 연달아 바꿀때 문제가 안생김
        setTries((prevTries)=>{
          return [...prevTries, {try: value, result:`${strike} 스트라이크, ${ball} 볼입니다.`}]}
        );
        setValue('');
      }
    }
  };

  const onChangeValue = (e) =>{
    setValue(e.target.value)
  };

  return(
  <>
    <h1>{result}</h1>
    <form onSubmit={onSubmitForm}>
      <input maxLength={4} value={value} onChange={onChangeValue}/> 
    </form>
    <div>시도: {tries.length}</div>
    <ul>
      { 
        tries.map((v,i)=>{
          return ( 
            <Try key={`${i + 1}차 시도 :`} tryInfo={v}/>
          )
        })
      }
    </ul>
  </>
  )
}

export default NumberBaseball