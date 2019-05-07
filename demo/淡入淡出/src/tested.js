import React, { Component } from 'react';
import './Calc.css';

class Title extends Component {
  render () {
    return (
      <div>
          <h1>React Calc 1.0</h1>
          <hr/>
      </div>
    )
  }
}

class Input extends Component { //输入组件
  constructor () {
    super()
    this.state = {
      data1: '',
      data2: '',
      operator:'+',
      result:'0'
    }
  }

   firstHandleChange (event) {
    this.setState({
      data1: parseFloat(event.target.value)
    })
  }
  secondHandleChange (event) {
    this.setState({
      data2: parseFloat(event.target.value),
    })
  }
  operatorHandleChange (event) {
    this.setState({
      operator: event.target.value
    })
  }

  handleClick(e){
    var tmp;
    if (this.state.operator==="+") {
      tmp=this.state.data1 + this.state.data2;
    }else if(this.state.operator==="-"){
      tmp=this.state.data1 - this.state.data2;
    }else if(this.state.operator==="*"){
      tmp=this.state.data1 * this.state.data2;
    }else{
      tmp=this.state.data1 / this.state.data2;
    }

    this.setState({
      result: tmp
    })
    // console.log(this.state.result)
    // document.getElementsByClassName('showResult')[0].getElementsByTagName("textarea")[0].value=
    // this.state.result +"翻转："+
    // this.state.result.toString().split('').reverse().join('');

    /*
    var tmp=this.state.result.toString().split('')[0];
    if(！tmp=="-"){
      tmp.reverse().join('');
    }else{
      tmp="-"+tmp.splice(0,1).reverse().join('')
    }

    */
  }

  render () {
    return (
      <div>
        <input type="number" className="calcInput" placeholder="第一个运算数"
      value={this.state.data1}  onChange={event=>this.firstHandleChange(event)}/>

      <select className="calcInput operator" value={this.state.operator} 
      onChange={event=>this.operatorHandleChange(event)}>
        <option value="+"> + </option>
        <option value="-"> － </option>
        <option value="*"> × </option>
        <option value="\/"> ÷ </option>
      </select>

      <input type="number" className="calcInput" placeholder="第二个运算数"
      value={this.state.data2} onChange={event=>this.secondHandleChange(event)}/>

      <button type="button" className="calcInput operator" 
      onClick={event=>this.handleClick(event)}> = </button>

      <div className="showResult">
        <textarea value={this.state.result} disabled={true}/>
      </div>

      </div>

    )
  }
}

class Calc extends Component {
  render () {
    return (
      <div className="Calc">
        <Title />
        <Input onClick={e=>this.handleResult(e)}/>
      </div>
    )
  }
}

export default Calc;
