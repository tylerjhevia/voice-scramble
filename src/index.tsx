// import * as React from "react";
// import * as ReactDOM from "react-dom";

// ReactDOM.render(
//   <Title compiler="TypeScript" framework="React" />,
//   document.getElementById("example")
// );

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

let initialState = {};
let devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f: any) => f;
let middleware = applyMiddleware(thunk);
const store: any = middleware(devtools(createStore))(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('example')
);
