import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Projects from '../pages/Projects';
import Home from '../pages/Home';
import AboutUs from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Blockchain from '../Projects/crypto/Blockchain';
import Admin from '../Admin/Dashboard';
import FTXdetail from '../Projects/crypto/FTX/index';
import FTX from '../pages/FTX';

function NavRoutes({ component: Component, ...rest }) {
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
        <Route path="/login" element={<Admin />} />
        <Route path="/ftx" element={<FTX />} />
        <Route path="/ftx/:id" element={<FTXdetail />} />

        <Route
          {...rest}
          render={props =>
            localStorage.getItem('token') ? (
              <Component {...props} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default NavRoutes;
