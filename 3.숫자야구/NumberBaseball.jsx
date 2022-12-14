//------------- ๐ Original Codes -------------
// import React, {useRef, useState, useCallback} from 'react';
// /*
//   ๐ ์ค๊ดํธ๋ก ๊ฐ์ ธ์ค๋๊ฑด ๋ญ๊ณ  ๊ทธ๋ฅ ๊ฐ์ ธ์ค๋ ๊ฑด ๋ญ๊น?
  
//   defalut๋ก exportํ๋ฉด ๊ทธ๋ฅ import์ํค๊ณ 
//   default๋ก export ์ ํ ์ ๋ค์ ์ค๊ดํธ{}์ธ์ import ์์ผ์ผ ํ๋ค.

//   ์์)
//   export const hello = 'hello' --> import {hello}
//   export default NumberBasball --> import NumberBaseball

//   export default์ ๊ทธ๋ฅ export๋ฅผ ํ ํ์ผ์์ ๊ฐ์ด ์ธ ์๋ ์๋ค.
//   ํ์ง๋ง! 
//   export๋ ์ฌ๋ฌ๋ฒ ์ธ ์ ์์ง๋ง, export default๋ ํํ์ผ์ ํ๋ฒ๋ง ์ธ ์ ์๋ค๋ ์ฐจ์ด๊ฐ ์๋ค. 
// */
// import Try from "./Try";

// /*
//   ๐ import์ require์ ์ฐจ์ด

//   require์ ๋ธ๋์ ๋ชจ๋์์คํ์ด๋ค. (common.js)
//   ๋ด๋ณด๋ผ ํ์ผ์์: module.exports = ๋ฐ๊นฅ์ผ๋ก ๋ด๋ณด๋ผ ํด๋์ค๋ ํจ์์ ์ด๋ฆ;
//   ๋ฐ์ ํ์ผ์์: const ํด๋์ค์ด๋ฆ = require('๋ฐ์์ฌ ๊ฒฝ๋ก')
//   +์ถ๊ฐ๋ก ๋ธ๋ ๋ชจ๋์์คํ์์
//   module.exports = {hello: 'a'}
//   exports.hello = 'a'
//   ์ ๋์ ๊ฐ๋ค.

//   import es2015์ ๋ชจ๋์์คํ์ด๋ค.
//   ๋ด๋ณด๋ผ ํ์ผ์์: export default ๋ฐ๊นฅ์ผ๋ก ๋ด๋ณด๋ผ ํด๋์ค๋ ํจ์์ ์ด๋ฆ;
//   ๋ฐ์ ํ์ผ์์: import ํด๋์ค๋ณ์ from '๊ฒฝ๋ก'


//   ์ด ๋์ ๋ค๋ฅด์ง๋ง, ์ผ๋ถ ํธํ์ด ๋๊ธฐ ๋๋ฌธ์, ์์ import๋ฌธ์ require๋ก ๋ฐ๊พธ์ด๋ ๋์๊ฐ๋ค.
//   ๋ค๋ง, import๋ ํ๋ฒ์ ์ฌ๋ฌ๊ฐ๋ฅผ ๋ฐ์์ฌ ์ ์์ด์

//   const React = require('react');
//   const {useRef, useState, useCallback} = React;
//   ์ด๋ ๊ฒ ๋๋์ง ์๊ณ 

//   import React, {useRef, useState, useCallback} ์ด๋ ๊ฒ ํ๋ฒ์ ๊ฐ์ ธ์ฌ ์ ์๋ค.
//   ๋ฐ๋ผ์ import๊ฐ ์ข๋ ๊น๋ํด์ ์์ฃผ ์ฐ์ธ๋ค.

//   ๊ธฐ๋ณธ์ ์ผ๋ก node๋ก ์นํฉ์ ๋๋ฆฌ๋๋ฐ,
//   node์์๋ ๋ธ๋ ๋ฌธ๋ฒ require๋ง ์ง์ํ์ง๋ง,
//   ์นํฉ๋๋ฆฌ๋ฉด์ ์ค๊ฐ์ ๋ฐ๋ฒจ์ด import > require๋ก ๋ฐ๊ฟ์คฌ๊ธฐ ๋๋ฌธ
//   (๊ฐ์ ๋งฅ๋ฝ์ผ๋ก webpack.config.js๋ ๋ธ๋๊ฐ ๋๋ฆฌ๊ธฐ ๋์ ๊ผญ!! require๋ฅผ ์จ์ผํ๋ค.)
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
//           result: 'ํ๋ฐ!',
//         }
//       ]));
//       setResult('ํ๋ฐ!');
//       alert('๊ฒ์์ ๋ค์ ์คํํฉ๋๋ค.');
//       setValue('');
//       setAnswer(getNumbers());
//       setTries([]);
//       inputEl.current.focus();
//     } else {
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) {
//         setResult(`10๋ฒ ๋๊ฒ ํ๋ ค์ ์คํจ! ๋ต์ ${answer.join(',')}์์ต๋๋ค!`); // state set์ ๋น๋๊ธฐ
//         alert('๊ฒ์์ ๋ค์ ์์ํฉ๋๋ค.');
//         setValue('');
//         setAnswer(getNumbers());
//         setTries([]);
//         inputEl.current.focus();
//       } else {
//         console.log('๋ต์', answer.join(''));
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
//             result: `${strike} ์คํธ๋ผ์ดํฌ, ${ball} ๋ณผ์๋๋ค.`,
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
//         <button>์๋ ฅ!</button>
//       </form>
//       <div>์๋: {tries.length}</div>
//       <ul>
//         {tries.map((v, i) => (
//           <Try key={`${i + 1}์ฐจ ์๋ : ${v.try}`} tryInfo={v}/>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default NumberBaseball;


//------------- ๐ ์ง์  Class > Hooks๋ก ๋ฐ๊ฟ๋ณด๊ธฐ -------------
import React, { useState, useRef } from 'react';
import Try from './Try';
// import Try from './TryClass';

function getNumbers(){ 
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i += 1){
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}
/* ์ค์!
  ๐ props๋ฅผ ์ฌ์ฉํ๋ฉด ์์ข์ ์ ์๋ ๋ฌธ์ 
  ๋ ๋๋ง์ด ์์ฃผ ์ผ์ด๋์ ์ฑ๋ฅ์ด ์์ข์ ์ง ์ ์๋ค.
  ๊ทธ๋ฐ ๋ฌธ์ ๋ฅผ ์ฐพ์๋ด๋ ๋ฐฉ๋ฒ๊ณผ ํด๊ฒฐํ๋ ๋ฐฉ๋ฒ์ ์์๋ณด์!!

  react dev tools ์ฝ์์์ > ํฑ๋๋ฐํด > 
  'Highlight updates when components render.' ์ฒดํฌ๋ฐ์ค ์ฒดํฌ
  ์ด๋ ๊ฒ ์ฒดํฌํด๋๊ณ  ๋ธ๋ผ์ฐ์ ์์ ์ฒดํฌํ๋ฉด ๋ ๋๋ง ๋๋ ๋ถ๋ถ๋ง๋ค
  ํ๋์์ผ๋ก ๋ฐ์ง ๊ฑฐ๋ฆฐ๋ค.
  ๊ทธ๋ฆฌ๊ณ  ๋ ๋๋ง์ด ๋น ๋ฅธ์๊ฐ์ ๋ง์ด ์ผ์ด๋  ์๋ก ๋ธ๋ผ์ฐ์  ์๋จ ๋ ๋ผ์ธ์ด ๋นจ๊ฐ์ง๋ค.
  ํ๋ > ์ด๋ก > ๋ธ๋ > ๋นจ๊ฐ ์์ผ๋ก ์์ข์์ง.
  
  ๋ด๊ฐ ์๋ ฅํ ๊ฐ์ด ์ด๋ค ์๊ด์๋ ์ปดํฌ๋ํธ๋ฅผ ๋ฆฌ๋๋๋งํ๊ณ  ์๋์ง ํ๋์ ํ์ํ  ์ ์๋ค.
*/

/*
  ๐ฃ ์ด ์ปดํฌ๋ํธ์์ input์ฐฝ์ ์๋ ฅํ ๋๋ง๋ค try๊ฐ ๋ฆฌ๋ ๋๋ง ๋๋ ์ด์ ๋ฐ์!

  ๊ทธ ์ด์ ๋?
  ๐ก ๋ถ๋ชจ ์ปดํฌ๋ํธ๊ฐ ๋ฆฌ๋๋๋ง๋๋ฉด, ๋ฐ๋์ ์์ ์ปดํฌ๋ํธ๋ ๋ฆฌ๋๋๋ง ๋๊ธฐ ๋๋ฌธ!!

  ์ขํฉํด์ - ์ปดํฌ๋ํธ๊ฐ ๋ฆฌ๋๋๋ง ๋๋ ๊ฒฝ์ฐ
  1.state๊ฐ ๋ฐ๋๋ค. 2.props๊ฐ ๋ฐ๋๋ค. 3.๋ถ๋ชจ์ปดํฌ๋ํธ๊ฐ ๋ฐ๋๋ค.

  ์ด๋ฐ ์ด์ธํ ์์ ์ปดํฌ๋ํธ์ ๋ฆฌ๋ ๋๋ง์ ๋ง์์ค์ ์๋๊ฒ
  PureComponent์ด๋ค.

  PureComponent๋ ์๋์ ๋๊ฐ์ง ๊ธฐ๋ฅ์ด ์๋ค.
  1.state๊ฐ ๋ฌ๋ผ์ก์ ๋๋ง ๋ฆฌ๋ ๋๋ง๋๊ฒ ํ๋ ๊ธฐ๋ฅ
  2.props๊ฐ ๋ฌ๋ผ์ก์ ๋๋ง ๋ฆฌ๋ ๋๋ง๋๊ฒ ํ๋ ๊ธฐ๋ฅ

  ๊ทผ๋ฐ!!๐ฅ
  PureComponent๋ class Component์ผ ๋๋ง ์ฌ์ฉ๊ฐ๋ฅํ๋ฐ??
  ํจ์ ์ปดํฌ๋ํธ์์๋ ์ด๋ฅผ ์ฌ์ฉํ  ์ ์๋๋ก ํ ๊ฒ์ด ์๋ค. 
  ๊ทธ๊ฒ๋ฐ๋ก memo!! >> Try.jsx์์ memo ํ์ธ

  ์๋ PureComponent ์ผ์ผ ์ข์๋ฐ ์ ๊ทธ๋ฅ Component์จ?
  ํ ์๋ ์์ง๋ง!

  ์ค์ ๋ก  Component์์ '์ด state๋ ๋ฐ๋์ด๋ ์ ๋ ๋ฆฌ๋๋๋ง ์๋๊ฒ ํ ๊ฑฐ์ผ'
  ๋ฑ๋ฑ์ ์ปค์คํ์ด ๋ค์ํด์
  ์ค๋ฌด์์  ๊ทธ๋ฅ Component๋ ๋ง์ด ์ด๋ค.

  ๐ ์์ฝ
  ์ปดํฌ๋ํธ ๋๋๋ง ์ต์ ํ ํ ๋
  ๋๋๋ง ์ปค์คํ์ด ํ์ํ๋ค: ๊ทธ๋ฅ ์ปดํฌ๋ํธ + shouldComponentUpdate
  ์ปค์คํ ํ์์๊ณ  ๋ถ๋ชจ๋ก์ธํด ์์๊น์ง ๋ฆฌ๋๋๋ง ๋๋๊ฑฐ ๋ง๊ณ  ์ถ๋ค: ํจ์ํ์ memo, ํด๋์ค๋ PureComponent
*/ 
const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  //ํจ์ ์ปดํฌ๋ํธ ํน์ฑ์ ๋งค๋ฒ ๋ฆฌ๋๋๋ง ๋  ๋๋ง๋ค ์ ์ฒด NumberBaseball ํจ์๊ฐ ์คํ๋๋ค.
  //์ง๊ธ ์๋์ ์ฝ๋์์ getNumbers()๋ 
  //๋งค๋ฒ ์คํ๋๊ธฐ๋ ํ์ง๋ง, ์ฒ์ ํ๋ฒ๋ง ์ ์ฉ๋๊ธฐ ๋๋ฌธ์ ๋ฌธ์ ๊ฐ ์์ด ๋ณด์ธ๋ค.
  // โ const [answer, setAnswer] = useState(getNumbers());
  //ํ์ง๋ง ์ฌ์ค ๋งค๋ฒ ๋๋๋ง๋ง๋ค getNumbers()๋ฅผ ์คํํ๊ฒ ๋๊ณ ,
  //๋ค๋ง state๊ธฐ๋ณธ๊ฐ๋ง ์ฒ์์ ๋ฃ์ด์ฃผ๋ ๊ฑฐ๋ผ์ ์คํ๋ ๊ฒฐ๊ณผ๊ฐ์ด state๋ก ์ ์ฉ๋์ง ์๋ ๊ฒ ๋ฟ์ด๋ค.

  //์ด๋ด ๋๋ useState์๋ฆฌ์ ํจ์์ ํธ์ถ์ด ์๋๋ผ, ํจ์ ์์ฒด๋ฅผ ๋ฃ์ด์ค๋ค.
  //์ด๋ ๊ฒ ๋ฃ์ผ๋ฉด ํจ์์ ๋ฆฌํด ๊ฐ์ด state๋ก ๋ค์ด๊ฐ๊ณ  ๊ทธ ๋ค์๋ถํฐ๋ ํจ์๊ฐ ์คํ๋์ง ์๋๋ค.
  const [answer, setAnswer] = useState(getNumbers); 
  //๐ก ์ด๋ ๊ฒ ํจ์๊ฐ ์ฒ์ ํธ์ถ๋์ ๋ฆฌํด๊ฐ์ ๋๋ ค์ค๋๊น์ง ๋ฆฌ์กํธ๊ฐ ๊ธฐ๋ค๋ ค ์ฃผ๋ ๊ฒ์
  //lazy init์ด๋ผ๊ณ  ๋ถ๋ฅธ๋ค.

  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);
  /*
    useRef ์ฌ์ฉ๋ฒ์ด ํจ์ํ๊ณผ class๊ฐ ๋ง์ด ๋ฌ๋ผ ํท๊ฐ๋ฆฐ๋ค.
    ์ด๋ด๋ class ์ปดํฌ๋ํธ์์ createRef๋ฅผ ์ฌ์ฉํ๋ฉด ๋น์ทํ๊ฒ ์ฌ์ฉ๊ฐ๋ฅ > NumberBaseballClass.jsx ์ฐธ๊ณ 
  */

  const onSubmitForm = (e) => { 
    e.preventDefault();
    if(value === answer.join('')){
      setResult('ํ๋ฐ!');
      //๐ Hooks์์๋ ์๋  ๊ฐ์ ์์ฉํ์ฌ ํ์ฌ ๊ฐ์ ๋ฐ๊ฟ ๋, ํจ์ํ setState
      // ๊ทธ๋์ผ state ์ฐ๋ฌ์ ๋ฐ๊ฟ๋ ๋ฌธ์ ๊ฐ ์์๊น
      setTries((prevTries) => {
        return [...prevTries.tries, {try: value, result:'ํ๋ฐ!'}]
      })
      alert('๊ฒ์์ ๋ค์ ์์ํฉ๋๋ค!');
      setValue('');
      setAnswer(getNumbers()); //๐ ์ด๋ฐ ๋ฐ์์  lazy init์ธ ์ ์๋ค!! useState์์๋ง lazy init
      setTries([]);
      inputEl.current.focus(); //Hooks์์  ref๋ฅผ ์ฐ๋ ค๋ฉด current๋ฅผ ํ์ผํ๋ค.
    } else { //๋ต ํ๋ ธ์ผ๋ฉด
      const answerArray = value.split('').map((v)=>parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9){ //10๋ฒ ์ด์ ํ๋ ธ์ ๋

        setResult(`10๋ฒ ๋๊ฒ ํ๋ ค์ ์คํจ! ๋ต์ ${answer.join(',')}์์ต๋๋ค.`)
        alert('๊ฒ์์ ๋ค์ ์์ํฉ๋๋ค!');
        setValue('');
        setAnswer(getNumbers()) //๐ ์ด๋ฐ ๋ฐ์์  lazy init์ธ ์ ์๋ค!! useState์์๋ง lazy init
        setTries([]);
        inputEl.current.focus(); //Hooks์์  ref๋ฅผ ์ฐ๋ ค๋ฉด current๋ฅผ ํ์ผํ๋ค.
      } else { //10๋ฒ ์ด๋ด๋ก ํ๋ ธ์ ๋
        for(let i = 0; i < 4; i ++){
          if(answerArray[i] === answer[i]){
            strike += 1;
          }else if(answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        //๐ Hooks์์๋ ์๋  ๊ฐ์ ์์ฉํ์ฌ ํ์ฌ ๊ฐ์ ๋ฐ๊ฟ ๋, ํจ์ํ setState
        // ๊ทธ๋์ผ state ์ฐ๋ฌ์ ๋ฐ๊ฟ๋ ๋ฌธ์ ๊ฐ ์์๊น
        setTries((prevTries)=>{
          return [...prevTries, {try: value, result:`${strike} ์คํธ๋ผ์ดํฌ, ${ball} ๋ณผ์๋๋ค.`}]}
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
      <input ref={inputEl} maxLength={4} value={value} onChange={onChangeValue}/> 
    </form>
    <div>์๋: {tries.length}</div>
    <ul>
      { 
        tries.map((v,i)=>{
          return ( 
            <Try key={`${i + 1}์ฐจ ์๋ :`} tryInfo={v}/>
          )
        })
      }
    </ul>
  </>
  )
}

export default NumberBaseball