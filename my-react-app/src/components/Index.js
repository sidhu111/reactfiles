import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './components/SimpleReduxReducer';
import { Provider } from 'react-redux';
import BankReducer from './components/BankReducer';
import ReducerB from './components/ReducerB';
import ReducerA from './components/ReducerA';
import reducerthunk from './components/redux-thunk/reducerthunk';
import thunk from 'redux-thunk';
import CombineReducerDemo from './CombineReducerDemo';


//  const rootReducer = combineReducers({
//    rA:ReducerA,
//    rB:ReducerB

//  })
//  const store=createStore(rootReducer);
// const store=createStore(BankReducer);

// const store = createStore(ReducerThunk,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
 <App /></Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
