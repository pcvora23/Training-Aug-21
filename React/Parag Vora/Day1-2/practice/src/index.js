import React from 'react';
import ReactDom from 'react-dom';
import element from './components/practice1';
import tick from './components/practice2';
import App from './components/practice3';

function Greeting()
{
  return <h1>hii i am parag</h1>
}

ReactDom.render(<Greeting></Greeting>,document.getElementById('root'));
ReactDom.render(element,document.getElementById('practice1'));
ReactDom.render(tick,document.getElementById('practice2'));
ReactDom.render(<App name="jeel" ></App>,document.getElementById('practice3'));


