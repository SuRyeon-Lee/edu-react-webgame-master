import React, { PureComponent } from 'react';
/*
  부모컴포넌트의 리랜더링으로 인한 자식 컴포넌트의 리랜더링을 막기위해서
  명심!!
  함수컴포넌트 => memo
  클래스컴포넌트 => PureComponent 
*/
class Try extends PureComponent {
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
