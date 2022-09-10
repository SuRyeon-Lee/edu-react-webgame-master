const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '칠뎁',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]){
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: ''
      });
      this.input.focus();
    }else{
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  }

  onChangeInput = (e) => {
    this.setState({value: e.target.value})
  }

  input;

  onRefInput = (c) => {
    this.input = c
  }

  render(){
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
          {/* 🛑 <input type="text" ref={this.onRefInput} defaultValue={this.state.value}/> */}
          {/* value가 있으면 onChange를 같이 넣어야함! onChange 안 넣을 거면 defaultValue라도  */}
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordRelay