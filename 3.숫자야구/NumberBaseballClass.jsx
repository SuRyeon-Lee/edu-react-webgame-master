//------------- 📝 Original Codes -------------
// import React, { Component, createRef } from 'react';
// import Try from './Try';

// function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
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
//     tries: [], // push 쓰면 안 돼요
//   };

//   onSubmitForm = (e) => {
//     const { value, tries, answer } = this.state;
//     e.preventDefault();
//     if (value === answer.join('')) {
//       this.setState((prevState) => {
//         return {
//           result: '홈런!',
//           tries: [...prevState.tries, { try: value, result: '홈런!' }],
//         }
//       });
//       alert('게임을 다시 시작합니다!');
//       this.setState({
//         value: '',
//         answer: getNumbers(),
//         tries: [],
//       });
//       this.inputRef.current.focus();
//     } else { // 답 틀렸으면
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) { // 10번 이상 틀렸을 때
//         this.setState({
//           result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
//         });
//         alert('게임을 다시 시작합니다!');
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
//             tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
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
//         <div>시도: {tries.length}</div>
//         <ul>
//           {tries.map((v, i) => {
//             return (
//               <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }

// export default NumberBaseball; // import NumberBaseball;




//------------- 📝 My Codes -------------
import React, { Component } from 'react';

function getNumbers(){ //숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수 

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: []
  }

  onSubmitForm = () => { //렌더같이 기본 제공되는 메소드 아니라 내가 작성할떈 꼭 화살표함수로!

  };

  onChangeValue = () =>{

  };

  render() {
    return(
    <>
      <h1>{this.state.result}</h1>
      <form onSubmit={this.onSubmitForm}>
        <input maxLength={4} value={this.state.value} onChange={this.onChangeValue}/> 
        {/* value와 onChange는 항상 세트, 안할거면 defaultValue*/}
      </form>
      <div>시도: {this.state.tries.length}</div>
      <ul>
        { 
        /* 
        📌 react는 반복문을 map으로 쓴다 
        예시1. 만약 요소가 두개이상이면 이차원 배열을 만들어서 쓸수 있다. 
        예시2. 혹은 객체로 만들어서 쓸 수도 있다. (많이 씀)
        */
        
        //예시1
        // [
        //   ['사과','달다'],
        //   ['바나나','맛있다'],
        //   ['포도','상큼하다'],
        //   ['귤','새콤하다'],
        //   ['감','달달하다'],
        //   ['배','촉촉하다'],
        //   ['밤','구수하다'],
        // ].map((el)=>{
        //   return(
        //     <li><b>{el[0]}</b> {el[1]}</li>
        //   )
        // })

        //예시2
        // 📌고유한 값을 key로 넣어줘야 한다.
        // idx는 절대 key로 사용하지 않는다!
        [
          {fruits:'사과',taste:'달다'},
          {fruits:'바나나',taste:'맛있다'},
          {fruits:'포도',taste:'상큼하다'},
          {fruits:'귤',taste:'새콤하다'},
          {fruits:'감',taste:'달달하다'},
          {fruits:'배',taste:'촉촉하다'},
          {fruits:'밤',taste:'구수하다'},
        ].map((el,idx)=>{
          return(
            <li key={el.fruits + el.taste}><b>{el.fruits}</b> {el.taste}</li>
          )
        })

        }
      </ul>
    </>
    )
  }
}

export default NumberBaseball