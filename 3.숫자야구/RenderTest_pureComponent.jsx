import React, { PureComponent } from 'react';
// shouldComponentUpdate 가 너무 복잡하다?
// PureComponent로 바꿀 수 있다.
// 이렇게하면 랜더링 쓸데없이 안 된다.
// shouldComponentUpdate를 알아서 구현해 놓은 것이라고 생각해도 좋다.
// But!!
// 🛑 객체나 배열같은 참조자료형같은 state가 있으면, PureComponent도 어려워한다.
class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: []
    }
    // 같은 주소값을 공유하는 array에 원소를 더하고
    // 새롭게 state로 설정했는데
    // 이번엔 클릭을 해도 변화를 감지하지 못해 랜더링을 해주지 않는다.
    // onClick = () => {
    //     const array = this.state.array;
    //     array.push(5)
    //     this.setState({
    //         array: array
    //     })
    // }

    //따라서 새로운 array를 꼭 만들어줘야하기 때문에,
    //기존 참조자료형을 펼쳐줘서 새롭게 만들어준다.
    //이건 pureComponent뿐만아니라 그냥 Component에서도 마찬가지!
    //근데 이것도 객체안에 배열안에 객체안에 ...이런식으로 가면 실수가 많이 나온다.
    //안에 있는거까지 다 펴서 새로 만들어줘야 해서!!
    //따라서!! 자료구조는 항상 간단하게!!
    onClick = () => {
        this.setState({
            array: [...this.state.array,1]
        })
    }


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