import './styles/global.css';
import React from 'react';
import Navbar from './common/Navbar';
import NavRoutes from '../src/utils/routes';
import Footer from './common/Footer';

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
