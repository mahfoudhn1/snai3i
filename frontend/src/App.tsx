import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Navbar from './components/home/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/jobs' element={<Jobs/>} />
    </Routes>
      
    </>
  );
}



export default App;
