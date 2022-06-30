import logo from './assets/logo.svg';
import './App.css';
import React from 'react';
import Header from './components/common/Header';
import Login from './components/common/Login';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>KOMPWEB</h1>
        <h4> Online Solutions</h4>
        {/* <a
          className="App-link-client"
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Log-in
        </a> */}
        <p>client login</p>
        <Login />
      </header>
      <Footer />
    </div>
  );
}

export default App;
