import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; 
//BrowserRouter는  history api을 사용하는 것/ HashRouter는 # 를 사용하는 방법/MemoryRouter는 주소는 바뀌지 않고 가상의 MemoryrRouter가 값을 가지고 있는다.
ReactDOM.render(
<BrowserRouter >
  <App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
