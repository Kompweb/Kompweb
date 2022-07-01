import logo from './assets/logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/common/Navbar';
import Login from './components/common/Login';
import Languages from './components/common/Languages';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>KOMPWEB</h1>
        <h2>Online Solutions</h2>
        <a
          className="App-link-client"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Log-in
        </a>
        <Login />
      </header>
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
