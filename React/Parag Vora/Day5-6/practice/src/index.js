import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './components/practice2';
import Practice1 from './components/practice1';
import Practice3 from './components/practice3';
import FlavorForm from './components/practice4';
import Practice5 from './components/practice5';
import Toggle from './components/practice6';


ReactDOM.render(
  <React.StrictMode>
    <Practice1></Practice1>,
    <NameForm></NameForm>,
    <Practice3></Practice3>
    <FlavorForm></FlavorForm>
    <Practice5></Practice5>
    <Toggle></Toggle>
  </React.StrictMode>,
  document.getElementById('root')
);


