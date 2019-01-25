import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
import store from './store';

const state = store.getState();
console.log('state from reducers',state);

ReactDOM.render(
<Dashboard 
  catToAdopt={state.catsReducer.cat} 
  dogToAdopt={state.dogsReducer.dog}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
