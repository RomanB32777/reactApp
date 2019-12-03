import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'; // применять Middleware
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer';
import reduxTunk from 'redux-thunk';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


// Middleware - добавляет определенный функционал редаксу

// функция, которая при измении store в редаксе, все будет выводить в консоль
// function loggerMiddlewere(store) {
//   return function(next) {
//     return function(action) {
//       // возвращаем какой-то результат, который получится после того, как мы применим action (dispatch)
//       const result = next(action); // продолжим цепочку выполения всех dispatch в store
//       console.log("Middleware", store.getState());
//       return result;
//     }
//   }
// }

const loggerMiddleware = store => next => action => {
  const result = next(action); // продолжим цепочку выполения всех dispatch в store
  console.log("Middleware", store.getState());
  return result;
}

const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware,
  reduxTunk
)); // applyMiddlewere в параметры передаем все Middleware
const app = (
  <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </Provider>
)

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
