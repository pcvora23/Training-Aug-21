import React from 'react';
import StudentIdCardList from './components/StudentIdCardList';
import './App.css';

 export default function App() {
  return (
    <div className='container bg-light border border-primary rounded my-5 p-5 text-center'>
      <h1 className='display-4'>Assignment</h1>
      <p>
      Create a 5 student info List in the StudentList class component and store it in the state Object and pass this info StudentIDCard Component using map function and props.
      </p>
      <StudentIdCardList></StudentIdCardList>
    </div>
  );
}


