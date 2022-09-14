import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/homepage/homepage';
import NavBar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Skills from './components/techSkills/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>

    </div>
  );
}

export default App;
