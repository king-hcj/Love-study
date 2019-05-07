import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Calc.css'

class Counter extends Component {
  render() {
    const { value1, value2,operator,result,reverse,resultdisplay,reversedisplay,
      onOperator,isEqual,onChange1,onChange2,showResult,showReverse } = this.props
    return (
      <div>
        <div className="Calc">
          <h1>Redux Calc 1.1</h1>
          <ul>
            <li onClick={showResult}>
                进行计算
            </li>
            <li onClick={showReverse}>
                结果翻转
            </li>
          </ul>
          <hr/>

          <div style={{display:resultdisplay}}>
            <input type='Number' id='data1' className="calcInput" value={value1} onChange={onChange1}/>
            {' '}
                <select id="operator" className="calcInput operator" onChange={onOperator} value={operator}>
                  <option value="+"> + </option>
                  <option value="-"> － </option>
                  <option value="*"> × </option>
                  <option value='/'> ÷ </option>
                </select>
              <input type='Number' id='data2' className="calcInput" value={value2} onChange={onChange2}/>
              {' '}
            <button onClick={isEqual} className="calcInput operator">
              =
            </button>
            <div>
              计算结果：<textarea  value={result} readOnly="readonly"/>
            </div>
          </div>
          <div style={{display:reversedisplay}}>
           翻转结果：<textarea  value={reverse} readOnly="readonly"/>
          </div>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  onChange1:PropTypes.func.isRequired,
  onChange2:PropTypes.func.isRequired,
  onOperator:PropTypes.func.isRequired,
  isEqual:PropTypes.func.isRequired,
  showResult:PropTypes.func.isRequired,
  showReverse:PropTypes.func.isRequired,
}

export default Counter
