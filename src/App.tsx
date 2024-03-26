import React from 'react';
import './App.css';
import Home from './Home';
import HowToApply from './HowToApply';
import Curriculum from './Curriculum';
import TuitionAndAid from './TuitionAndAid';
import Contact from './Contact';
import About from './About';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/how-to-apply' element={<HowToApply/>}/>
        <Route path='/curriculum' element={<Curriculum/>}/>
        <Route path='/tutions-and-aid' element={<TuitionAndAid/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
