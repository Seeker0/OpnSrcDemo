import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import OSDemo from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import * as actions from './actions';

// let store = createStore(OSDemo);
//
// let unsubscribe = store.subscribe(() => console.log(store.getState));
//
// console.log('initial state', store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
