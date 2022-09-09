import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from '../Projects';
import Home from '../Home';
import AboutUs from '../About';
import Contact from '../Contact';
import Blog from '../Blog';
import Blockchain from '../Blockchain';
import Admin from '../Admin/Dashboard';

function NavRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default NavRoutes;
