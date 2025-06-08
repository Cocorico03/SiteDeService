import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contacts';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Contacts' element={<Contact/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
      </Routes>
    </Router>
  )
}

export default App
