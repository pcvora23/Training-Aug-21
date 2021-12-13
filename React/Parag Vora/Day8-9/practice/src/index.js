import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypesDemo from './components/prop-types/propTypes';
import Main from './components/routing/main';
import FormDemo from './components/controlledInputs/formdemo';
import UncontrolledInput from './components/uncontrolledinputs/uncontrolledInput';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main></Main> */}
    {/* <PropTypesDemo></PropTypesDemo> */}
    {/* <FormDemo></FormDemo> */}
    <UncontrolledInput></UncontrolledInput>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
