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
import Try from './Try';

function getNumbers(){ //숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수 
  //🤔 얘는 왜 밖에 빼냐?
  //사실 안에 넣어도 상관없지만, this를 쓰지 않으면 밖에 뺴도 상관 없기 때문에,
  //다른 데에서도 쓸 수도 있기도 하고 (지금 상황은 안에 넣어도 상관없음)
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

  onSubmitForm = (e) => { //렌더같이 기본 제공되는 메소드 아니라 내가 작성할떈 꼭 화살표함수로!
    //화살표로 안쓰면 안에서 this를 못 쓴다.
    //반면 화살표함수는 bind(this)를 자동으로 해주기 때문에 this를 쓸 수 있다.
    const { answer, value, tries} = this.state;
    e.preventDefault();
    if(value === answer.join('')){
      this.setState({
        result: '홈런!',
        //🛑push로 하지 말고 muttable하게 새로 바꿔야한다.
        //리액트가 랜더링 하는 기준이 기존 값이랑 새로운 값이 바뀌었을 때를 인식해서 하는 원리인데
        //참조 자료형에서 push를 하게 될경우 주소 값이 동일하므로 변경사항을 인식하지 못하고
        //리랜더링 하지 못한다.
        tries: [...tries, {try: value, result:'홈런!'}]
      })
      alert('게임을 다시 시작합니다!');
      this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
    } else { //답 틀렸으면
      const answerArray = value.split('').map((v)=>parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9){ //10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        })
      } else { //10번 이내로 틀렸을 때
        for(let i = 0; i < 4; i ++){
          if(answerArray[i] === answer[i]){
            strike += 1;
          }else if(answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        this.setState({
          tries: [...tries, {try: value, result:`${strike} 스트라이크, ${ball} 볼입니다.`}],
          value: '',
        })
      }
    }
  };

  onChangeValue = (e) =>{
    this.setState({
      value : e.target.value
    })
  };

  render() {
    //🛑아래처럼 구조분해 쓰면 return문 안에서 this.state일일 적지 않아도 된다.
    const {result, value, tries} = this.state
    return(
    <>
      <h1>{result}</h1>
      <form onSubmit={this.onSubmitForm}>
        <input maxLength={4} value={value} onChange={this.onChangeValue}/> 
        {/* value와 onChange는 항상 세트, 안할거면 defaultValue*/}
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        { 
          // 반복문 단위로 컴포넌트 만들기
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
}

export default NumberBaseball