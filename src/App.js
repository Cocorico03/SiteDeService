import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='page-container'>
        <Navbar/>
        <main className='content-wrap'>
            <Routes>
              <Route path='/Home' element={<Home />}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
              <Route path='/Services' element={<Services/>}/>
              <Route path='/Portfolio' element={<Portfolio/>}/>
              <Route path='/Contacts' element={<Contact/>}/>
          </Routes>
        </main>


      <Footer/>

      </div>
  
    </Router>
  )
}

export default App
