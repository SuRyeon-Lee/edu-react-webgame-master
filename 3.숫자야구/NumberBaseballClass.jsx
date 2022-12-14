//------------- π Original Codes -------------
// import React, { Component, createRef } from 'react';
// import Try from './Try';

// function getNumbers() { // μ«μ λ€ κ°λ₯Ό κ²ΉμΉμ§ μκ³  λλ€νκ² λ½λ ν¨μ
//   const candidate = [1,2,3,4,5,6,7,8,9];
//   const array = [];
//   for (let i = 0; i < 4; i += 1) {
//     const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//     array.push(chosen);
//   }
//   return array;
// }

// class NumberBaseball extends Component {
//   state = {
//     result: '',
//     value: '',
//     answer: getNumbers(), // ex: [1,3,5,7]
//     tries: [], // push μ°λ©΄ μ λΌμ
//   };

//   onSubmitForm = (e) => {
//     const { value, tries, answer } = this.state;
//     e.preventDefault();
//     if (value === answer.join('')) {
//       this.setState((prevState) => {
//         return {
//           result: 'νλ°!',
//           tries: [...prevState.tries, { try: value, result: 'νλ°!' }],
//         }
//       });
//       alert('κ²μμ λ€μ μμν©λλ€!');
//       this.setState({
//         value: '',
//         answer: getNumbers(),
//         tries: [],
//       });
//       this.inputRef.current.focus();
//     } else { // λ΅ νλ ΈμΌλ©΄
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) { // 10λ² μ΄μ νλ Έμ λ
//         this.setState({
//           result: `10λ² λκ² νλ €μ μ€ν¨! λ΅μ ${answer.join(',')}μμ΅λλ€!`,
//         });
//         alert('κ²μμ λ€μ μμν©λλ€!');
//         this.setState({
//           value: '',
//           answer: getNumbers(),
//           tries: [],
//         });
//         this.inputRef.current.focus();
//       } else {
//         for (let i = 0; i < 4; i += 1) {
//           if (answerArray[i] === answer[i]) {
//             strike += 1;
//           } else if (answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         this.setState((prevState) => {
//           return {
//             tries: [...prevState.tries, { try: value, result: `${strike} μ€νΈλΌμ΄ν¬, ${ball} λ³Όμλλ€`}],
//             value: '',
//           };
//         });
//         this.inputRef.current.focus();
//       }
//     }
//   };

//   onChangeInput = (e) => {
//     console.log(this.state.answer);
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   inputRef = createRef(); // this.inputRef

//   render() {
//     const { result, value, tries } = this.state;
//     return (
//       <>
//         <h1>{result}</h1>
//         <form onSubmit={this.onSubmitForm}>
//           <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
//         </form>
//         <div>μλ: {tries.length}</div>
//         <ul>
//           {tries.map((v, i) => {
//             return (
//               <Try key={`${i + 1}μ°¨ μλ :`} tryInfo={v} />
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }

// export default NumberBaseball; // import NumberBaseball;




//------------- π My Codes -------------
import React, { Component, createRef } from 'react';
import Try from './Try';

function getNumbers(){ //μ«μ λ€κ°λ₯Ό κ²ΉμΉμ§ μκ³  λλ€νκ² λ½λ ν¨μ 
  //π€ μλ μ λ°μ λΉΌλ?
  //μ¬μ€ μμ λ£μ΄λ μκ΄μμ§λ§, thisλ₯Ό μ°μ§ μμΌλ©΄ λ°μ λΊ΄λ μκ΄ μκΈ° λλ¬Έμ,
  //λ€λ₯Έ λ°μμλ μΈ μλ μκΈ°λ νκ³  (μ§κΈ μν©μ μμ λ£μ΄λ μκ΄μμ)
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i += 1){
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), //ex) [1,3,5,7]
    tries: []
  }

  onSubmitForm = (e) => { //λ λκ°μ΄ κΈ°λ³Έ μ κ³΅λλ λ©μλ μλλΌ λ΄κ° μμ±ν λ κΌ­ νμ΄νν¨μλ‘!
    //νμ΄νλ‘ μμ°λ©΄ μμμ thisλ₯Ό λͺ» μ΄λ€.
    //λ°λ©΄ νμ΄νν¨μλ bind(this)λ₯Ό μλμΌλ‘ ν΄μ£ΌκΈ° λλ¬Έμ thisλ₯Ό μΈ μ μλ€.
    const { answer, value, tries} = this.state;
    e.preventDefault();
    if(value === answer.join('')){
      //π μλ  κ°μ μμ©νμ¬ νμ¬ κ°μ λ°κΏ λ, ν¨μν setState
      // κ·ΈλμΌ state μ°λ¬μ λ°κΏλ λ¬Έμ κ° μμκΉ
      this.setState((prevState) => {
        return {
          result: 'νλ°!',
          tries: [...prevState.tries, {try: value, result:`${strike} μ€νΈλΌμ΄ν¬, ${ball} λ³Όμλλ€.`}],
        }
      })
      alert('κ²μμ λ€μ μμν©λλ€!');
      /*
        π renderμμμ setStateλ₯Ό μ°λ©΄ μλλ€.

        render > setStateμ€ν > λ€μ render > λ€μ setStateμ€ν
        λ¬΄νλ°λ³΅λλ€.
      */
      this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.inputRef.current.focus(); //π createRefλ₯Ό μ¬μ©νλ©΄ useRefλ λμΌν λ°©μμΌλ‘ current νμν¨
    } else { //λ΅ νλ ΈμΌλ©΄
      const answerArray = value.split('').map((v)=>parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9){ //10λ² μ΄μ νλ Έμ λ
        this.setState({
          result: `10λ² λκ² νλ €μ μ€ν¨! λ΅μ ${answer.join(',')}μμ΅λλ€.`
        });
        alert('κ²μμ λ€μ μμν©λλ€!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        })
        this.inputRef.current.focus(); //π createRefλ₯Ό μ¬μ©νλ©΄ useRefλ λμΌν λ°©μμΌλ‘ current νμν¨
      } else { //10λ² μ΄λ΄λ‘ νλ Έμ λ
        for(let i = 0; i < 4; i ++){
          if(answerArray[i] === answer[i]){
            strike += 1;
          }else if(answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        //π μλ  κ°μ μμ©νμ¬ νμ¬ κ°μ λ°κΏ λ, ν¨μν setState
        // κ·ΈλμΌ state μ°λ¬μ λ°κΏλ λ¬Έμ κ° μμκΉ
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, {try: value, result:`${strike} μ€νΈλΌμ΄ν¬, ${ball} λ³Όμλλ€.`}],
            value: '',
          }
        })
      }
    }
  };

  onChangeValue = (e) =>{
    this.setState({
      value : e.target.value
    })
  };

  // inputRef;
  // onInputRef = (c) => {this.inputRef = c;}

  inputRef = createRef()
  //πcreateRefλ₯Ό μ¬μ©ν΄μ λ£μΌλ©΄ λ°λ‘ refλ‘ μ°κ²°ν΄μ€κ² λ€μ΄κ°

  render() {
    //πμλμ²λΌ κ΅¬μ‘°λΆν΄ μ°λ©΄ returnλ¬Έ μμμ this.stateμΌμΌ μ μ§ μμλ λλ€.
    const {result, value, tries} = this.state
    return(
    <>
      <h1>{result}</h1>
      <form onSubmit={this.onSubmitForm}>
        <input ref={this.onInputRef} maxLength={4} value={value} onChange={this.onChangeValue}/> 
        {/* valueμ onChangeλ ν­μ μΈνΈ, μν κ±°λ©΄ defaultValue*/}
      </form>
      <div>μλ: {tries.length}</div>
      <ul>
        { 
          // λ°λ³΅λ¬Έ λ¨μλ‘ μ»΄ν¬λνΈ λ§λ€κΈ°
          tries.map((v,i)=>{
            return ( 
              <Try key={`${i + 1}μ°¨ μλ :`} tryInfo={v}/>
            )
          })
        }
      </ul>
    </>
    )
  }
}

export default NumberBaseball