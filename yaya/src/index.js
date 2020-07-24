import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter,BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
const Router=process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter
ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
  ,  
  document.getElementById('root')
);

