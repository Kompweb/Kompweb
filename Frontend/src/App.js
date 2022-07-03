// import logo from './assets/logo.svg';
import './Style.css';
import React from 'react';
import Navbar from './components/common/Navbar';
import NavRoutes from '../src/utils/routes';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
