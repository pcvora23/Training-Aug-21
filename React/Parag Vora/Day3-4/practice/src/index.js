import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
// import App from './components/practice1';
// import Clock from './components/practice2';
// import TextForm from './components/practice3';

/*function Greeting()
{
  return <h1>hii i am parag</h1>
}*/

// ReactDom.render(<Greeting></Greeting>,document.getElementById('root'));
// ReactDom.render(<App></App>,document.getElementById('practice1'));
// ReactDom.render(<Clock date={new Date()}></Clock>,document.getElementById('practice2'));
// ReactDom.render(<TextForm heading="Enter the text to analyze below"></TextForm>,document.getElementById('practice3'));

ReactDom.render(<App></App>,document.getElementById('root'));