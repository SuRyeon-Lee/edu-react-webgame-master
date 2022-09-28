import React, { PureComponent } from 'react';
/*
  부모컴포넌트의 리랜더링으로 인한 자식 컴포넌트의 리랜더링을 막기위해서
  명심!!
  함수컴포넌트 => memo
  클래스컴포넌트 => PureComponent 
*/
class Try extends PureComponent {
  //class 컴포넌트에서 props를 state로 설정하기 요런식
  // state = {
  //  result: this.props.result,
  //  try: this.props.try
  // };

  //📌 constructor 쓰는 경우
  // constructor(props){
  //   //constructor을 쓰면 함수기 때문에,
  //   //중간에 다른 동작을 할 수 있다.
  //   //예를 들면 아래와 같이 필터링을 한다던가
  //   //이렇게 활용도가 많아진다. 정밀한 동작, 기본객체로 안되는 동작
  //   const filtered = this.props.filter(()=>{

  //   })
  //   super(props); //super와 constructor는 짝이다.
  //   this.state = {
  //     result: filtered,
  //     try: this.props.try,
  //   }
  // }

  render() {
    // props는 유산이다. 어떤 컴포넌트에 props가 있다면 부모가 있다는 의미
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
