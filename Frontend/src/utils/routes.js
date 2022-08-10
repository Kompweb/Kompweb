import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Projects from '../components/pages/Projects';
import Home from '../components/pages/Home';
import AboutUs from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Blog from '../components/pages/Blog';
import Blockchain from '../components/pages/Blockchain';
function NavRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blockchain" element={<Blockchain />} />
      </Routes>
    </div>
  );
}

export default NavRoutes;
