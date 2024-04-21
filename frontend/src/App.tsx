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
import Joboffer from './components/jobpost/Joboffer';
import Profile from './components/profile/Profile';
import Clientreg from './components/client/Clientreg';

function App() {

  return (
    
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/auth/:name' element={<Auth/>}/>
      <Route path='/complete' element={<Clientreg/>} />
      <Route path='/' element={<Home/>} />

      <Route path='/jobs' element={<Jobs/>} />
      <Route path='/jobs/:id' element={<Jobpost/>} />
      <Route path='/joboffer' element={<Joboffer/>} />
      <Route path='/workers' element={<WorkersList/>} />
      <Route path='/postwork' element={<Workpost/>} />
      <Route path='/workers/:id' element={<Service/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>

    </>
  );
}



export default App;
