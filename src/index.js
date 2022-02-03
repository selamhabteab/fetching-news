//external imports:
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
  //to create the store that will maintain the Redux state
  //to be able to use middleware, in this case thunk
import thunk from 'redux-thunk';
  //a middleware that allows us to make asynchronous actions in redux
import { Provider } from 'react-redux';
  //to wrap the entire application in redux
import { composeWithDevTools } from 'redux-devtools-extension';
  //code that connects your app to redux DevTools
import logger from 'redux-logger';

//local imports:
import App from './App';
import rootReducer from './reducers/index';

//assets:
import './index.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

render(
  //When used with React, a <Provider> exists to wrap the application, and anything within the Provider can have access to Redux.
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
)


