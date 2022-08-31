import './styles/global.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import NavRoutes from '../src/utils/routes';
import Footer from './components/common/Footer';

function App({ children }) {
  let history = useNavigate();

  return (
    <div className="container">
      {/* <span>LogIn</span> */}
      <Navbar />
      <span
        type="button"
        style={{ color: '#fff', fontSize: 16, marginLeft: 30 }}
        onClick={() => history.goBack()}
      >
        {children}
        {'< back'}
      </span>
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
