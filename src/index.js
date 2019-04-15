import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { formReducer, initialState } from './reducers';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
 
export const store = createStore(formReducer, initialState, applyMiddleware(logger));

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root'));