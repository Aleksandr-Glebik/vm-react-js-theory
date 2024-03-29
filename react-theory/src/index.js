import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'

import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/rootReducer'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'

// function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       const result = next(action)
//       console.log('middleware', store.getState());

//       return result
//     }
//   }
// }

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('middleware', store.getState());
  return result
}

const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware,
  reduxThunk
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
