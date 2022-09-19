import React, { Component } from 'react';

class Try extends Component {
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
