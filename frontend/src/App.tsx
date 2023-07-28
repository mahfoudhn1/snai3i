import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Navbar from './components/home/Navbar';
import Jobpost from './components/jobs/Jobpost';
import WorkersList from './components/workers/WorkersList';
import Service from './components/workers/Service';
import Footer from './components/home/Footer';
import Login from './components/authentication/Login';
import Singup from './components/authentication/Singup';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Singup/>}/>
      <Route path='/jobs' element={<Jobs/>} />
      <Route path='/jobs/:id' element={<Jobpost/>} />
      <Route path='/workers' element={<WorkersList/>} />
      <Route path='/workers/:id' element={<Service/>} />
    </Routes>

    </>
  );
}



export default App;
