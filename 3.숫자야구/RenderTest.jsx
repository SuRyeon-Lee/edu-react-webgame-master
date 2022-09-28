import React, { Component } from 'react';

class Test extends Component {
    state = {
        counter: 0
    }

    //shouldComponentUpdate 리액트에서 지원하는 메서드이다.
    //여기서 어떤 state가 바뀌었을 때 랜더링 시킬지 명시해줘야한다.
    shouldComponentUpdate(nextProps,nextState, nextContext){
        //현재 카운터가 미래에 바뀐다면
        if(this.state.counter !== nextState.counter){
            //렌더링을 해준다. (true)면 렌더링 해줌
            return true;
        }
        // 바뀌지 않으면 렌더링 안함
        return false
    }

    //아래 코드처럼 짜 놓으면, 클릭하면 렌더가 될까?
    onClick = () => {
        this.setState({}) //setState에서 state를 하나도 안바꿨다.
    }
    //🫢 devTools로 체크해보면 렌더링이 되는 모습을 확인할 수 있다.
    // state와 props가 바뀌어야만 랜더링이 된다면서??? 안바꼈는뎅?
    // 사실상 바뀐게 없어도 setState만 호출하면 나머지가 바뀌어버린다.
    // 그래서 필요한게 shouldComponentUpdate

    render(){
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test