import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calc from './Calc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Calc />,
	 document.getElementById('root')
	 );
registerServiceWorker();
