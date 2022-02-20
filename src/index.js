import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*
ReactDOM.render(
  <div>
      <p>1. Is React a JavaScript library for building User Interfaces?</p>
      <input type='radio' id='yes'></input>
      <label htmlFor='yes'>Yes</label><br></br>
      <input type='radio' id='no'></input>
      <label htmlFor='no'>No</label>
  </div>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
