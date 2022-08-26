import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './footer';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<Home/>}/>
      {/* <Redirect to="/"/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
