import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <Counter
    value1={store.getState().value1}
    value2={store.getState().value2}
    operator={store.getState().operator}
    result={store.getState().result}
    reverse={store.getState().reverse}
    resultdisplay={store.getState().resultdisplay}
    reversedisplay={store.getState().reversedisplay}
    onChange1={() => store.dispatch({ type: 'VALUE1' })}
    onChange2={() => store.dispatch({ type: 'VALUE2'})}
    onOperator={() => store.dispatch({ type: 'OPERATOR'})}
    isEqual={() => store.dispatch({ type: 'EQUAL'})}
    showResult={() => store.dispatch({ type: 'SHOWRESULT'})}
    showReverse={() => store.dispatch({ type: 'SHOWRESVERSE'})}
  />,
  document.getElementById('root')
)

render()
store.subscribe(render)
