import React, { Component } from 'react';
import './Calc.css';

// 输入、输出等主要操作
class Input extends Component { 
  constructor () {
    super()
    this.state = {
      data1: '',
      data2: '',
      operator:'+',
      result:'0',
      isZero:"点击等号完成计算！"
    }
  }

    FocusHandle (event) {    //聚焦时，选中内容
    event.target.placeholder="";
    event.target.select();
    document.getElementById('imply').style.display="none";
    }
    BlurHandle(event){
      event.target.placeholder="运算数";
    }

   firstChangeHandle (event) {
    if(event.target.value==="")return;
    // var aa=this.state.operator;
    this.setState({
      data1: parseFloat(event.target.value),
      // result: parseFloat(event.target.value)+ aa +this.state.data2
    })
    if(this.state.data2){
      this.setState({
        isZero: "点击等号，完成计算！",
      })
      document.getElementById('imply').style.display="block";
    }
  }

  secondChangeHandle (event) {
    if(event.target.value==="")return;
    this.setState({
      data2: parseFloat(event.target.value),
    })
    if(this.state.data1){
      this.setState({
        isZero: "点击等号，完成计算！",
      })
      document.getElementById('imply').style.display="block";
    }
    // this.handleClick();
  }
  operatorChangeHandle (event) {
    this.setState({
      operator: event.target.value
    })
    if(this.state.data1 && this.state.data2){
      this.setState({
        isZero: "点击等号，完成计算！",
      })
      document.getElementById('imply').style.display="block";
    }
  }

  handleClick(){  //等号点击响应函数
    var tmp;
    if (this.state.operator==="+") {
      tmp=this.state.data1 + this.state.data2;
    }else if(this.state.operator==="-"){
      tmp=this.state.data1 - this.state.data2;
    }else if(this.state.operator==="*"){
      tmp=this.state.data1 * this.state.data2;
    }else{
      if(this.state.data2===0){
        this.setState({
            result: 0,
            isZero: "对不起，0不能做除数！"
          })
        document.getElementsByClassName('showReverse')[0].innerHTML="<p>"+"您还没有进行计算，无法翻转！"+"</p>";
        return;
      }
      tmp=this.state.data1 / this.state.data2;
    }
    this.setState({
      result: tmp
    })
    // 处理翻转结果
    var Rresult=document.getElementsByClassName('showReverse')[0].innerHTML;
    Rresult=tmp;

    var Rstr=Rresult.toString().split('')[0];
    if(Rstr==="-"){
      Rresult=Rresult.toString().split('').slice(1).reverse().join('');
      Rresult="-" + Rresult
    }else{
      Rresult=Rresult.toString().split('').reverse().join('');
    }
    document.getElementsByClassName('showReverse')[0].innerHTML="<p>"+"翻转结果："+Rresult+"</p>";
  }

  render () {
    return (
      <div>
        <input type="number" className="calcInput" placeholder="运算数"
        value={this.state.data1} onFocus={event=>this.FocusHandle(event)} 
        onBlur={event=>this.BlurHandle(event)} onChange={event=>this.firstChangeHandle(event)}/>

        <select className="calcInput operator" value={this.state.operator} 
        onChange={event=>this.operatorChangeHandle(event)}>
          <option value="+"> + </option>
          <option value="-"> － </option>
          <option value="*"> × </option>
          <option value="\/"> ÷ </option>
        </select>

        <input type="number" className="calcInput" placeholder="运算数"
        value={this.state.data2} onFocus={event=>this.FocusHandle(event)} 
        onBlur={event=>this.BlurHandle(event)} onChange={event=>this.secondChangeHandle(event)}/>

        <button type="button" className="calcInput operator" 
        onClick={event=>this.handleClick(event)}> = </button>
        
        <hr/>
        <span>提示：</span><p id="imply">{this.state.isZero}</p>
        

        <div className="showResult">
          <p>结果：</p>
          <textarea value={this.state.result} disabled={true} />
        </div>
      </div>
    )
  }
}

export default Input;