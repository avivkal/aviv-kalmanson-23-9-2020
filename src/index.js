import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './Store/store'
import axios from 'axios'

axios.defaults.baseURL = 'https://dataservice.accuweather.com/';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
