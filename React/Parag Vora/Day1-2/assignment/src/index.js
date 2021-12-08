import React  from "react";
import ReactDom from "react-dom";
import HelloWorld from "./components/assignment1";
import StudentInfo from "./components/assignment2";
import dynamicStudInfo from "./components/assignment3";
import Assignment4 from "./components/assignment4";
import Assignment5 from "./components/assignment5";
import Assignment6 from "./components/assignment6";
import './index.css';

ReactDom.render(<HelloWorld></HelloWorld>,document.getElementById('root'));
ReactDom.render(<StudentInfo></StudentInfo>,document.getElementById('Assignment2'));
ReactDom.render(<dynamicStudInfo></dynamicStudInfo>,document.getElementById('Assignment3'));
ReactDom.render(<Assignment4></Assignment4>,document.getElementById('Assignment4'));
ReactDom.render(<Assignment5></Assignment5>,document.getElementById('Assignment5'));
ReactDom.render(<Assignment6></Assignment6>,document.getElementById('Assignment6'));