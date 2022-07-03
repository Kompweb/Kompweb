import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Projects from '../components/pages/Projects';
import Home from '../components/pages/Home';
import AboutUs from '../components/pages/About';
import Contact from '../components/pages/Contact';
function NavRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default NavRoutes;
