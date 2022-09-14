import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Projects from '../Projects';
import Home from '../Home';
import AboutUs from '../About';
import Contact from '../Contact';
import Blog from '../Blog';
import Blockchain from '../features/Blockchain';
import Admin from '../Admin/Dashboard';

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
