import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Navbar from './components/home/Navbar';
import Jobpost from './components/jobs/Jobpost';
import WorkersList from './components/workers/WorkersList';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/jobs' element={<Jobs/>} />
      <Route path='/jobs/:id' element={<Jobpost/>} />
      <Route path='/workers' element={<WorkersList/>} />
    </Routes>
      
    </>
  );
}



export default App;
