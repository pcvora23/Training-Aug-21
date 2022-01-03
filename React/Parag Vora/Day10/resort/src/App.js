import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import {Route,Routes}from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' exact element={<Home></Home>}></Route>
    <Route path='/rooms' exact element={<Rooms></Rooms>}></Route>
    <Route path='/rooms/:slug' exact element={<SingleRoom></SingleRoom>}></Route>
    <Route path='*' element={<Error></Error>}></Route>
    </Routes>
    </>
  )
}

export default App;
