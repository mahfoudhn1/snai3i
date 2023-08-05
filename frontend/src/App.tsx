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
import Auth from './components/authentication/Auth';
import Workpost from './components/workpost/Workpost';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth/:name' element={<Auth/>}/>

      <Route path='/jobs' element={<Jobs/>} />
      <Route path='/jobs/:id' element={<Jobpost/>} />
      <Route path='/workers' element={<WorkersList/>} />
      <Route path='/postwork' element={<Workpost/>} />
      <Route path='/workers/:id' element={<Service/>} />
    </Routes>

    </>
  );
}



export default App;
