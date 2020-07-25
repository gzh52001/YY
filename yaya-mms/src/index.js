import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Redirect,withRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter><App /></HashRouter>
  ,document.getElementById('root')
);


serviceWorker.unregister();
