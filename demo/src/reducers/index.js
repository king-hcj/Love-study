export default (state, action) => {
	if (typeof state === 'undefined') {
          return {  //初始化state
                  value1:0,
                  value2:0,
                  operator:"+",
                  result:0,
                  reverse:0,
                  resultdisplay:'block',
        		  reversedisplay:'none',
                }
        }

  switch (action.type) {
    case 'VALUE1':
      return {
      	value1:parseFloat(document.getElementById('data1').value),
        value2:state.value2,
        operator:state.operator,
        result:state.result,
        reverse:state.reverse,
        resultdisplay:state.resultdisplay,
        reversedisplay:state.reversedisplay
      }
    case 'VALUE2':
      return {
      	value1:state.value1,
        value2:parseFloat(document.getElementById('data2').value),
        operator:state.operator,
        result:state.result,
        reverse:state.reverse,
        resultdisplay:state.resultdisplay,
        reversedisplay:state.reversedisplay
      }
     case 'OPERATOR':
     	return {
      	value1:state.value1,
        value2:state.value2,
        operator:document.getElementById('operator').value,
        result:state.result,
        reverse:state.reverse,
        resultdisplay:state.resultdisplay,
        reversedisplay:state.reversedisplay
      }
     case 'EQUAL':
      return {
      	value1:state.value1,
        value2:state.value2,
        operator:state.operator,
        result:state.operator==="-"? parseFloat(state.value1) - parseFloat(state.value2):
		        (state.operator==="*"? parseFloat(state.value1) * parseFloat(state.value2):
		        (state.operator==="/"? (parseInt(state.value2,10)===0?"对不起，0不能做除数!":
		        parseFloat(state.value1) / parseFloat(state.value2)):
		        parseFloat(state.value1) + parseFloat(state.value2))),
        reverse:state.result.toString().split('')[0]==="-"?
                ("-" +state.result.toString().split('').slice(1).reverse().join('')):
                state.result.toString().split('').reverse().join(''),
        resultdisplay:state.resultdisplay,
        reversedisplay:state.reversedisplay
       }
     case 'SHOWRESULT':
      return {
      	value1:state.value1,
        value2:state.value2,
        operator:state.operator,
        result:state.result,
        reverse:state.reverse,
        resultdisplay:'block',
        reversedisplay:'none',
       }
      case 'SHOWRESVERSE':
      return {
      	value1:state.value1,
        value2:state.value2,
        operator:state.operator,
        result:state.result,
        reverse:state.result.toString().split('')[0]==="-"?
                ("-" +state.result.toString().split('').slice(1).reverse().join('')):
                state.result.toString().split('').reverse().join(''),
        resultdisplay:'none',
        reversedisplay:'block',
       }
    default:
    	return state
  }
}
