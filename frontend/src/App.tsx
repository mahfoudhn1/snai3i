import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Navbar from './components/home/Navbar';
import Jobpost from './components/jobs/Jobpost';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/jobs' element={<Jobs/>} />
      <Route path='/jobs/:id' element={<Jobpost/>} />
    </Routes>
      
    </>
  );
}



export default App;
