import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import animate from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<animate/>, document.getElementById('root'));
registerServiceWorker();
