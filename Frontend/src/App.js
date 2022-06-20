import logo from './assets/logo.svg';
import './App.css';
import React from 'react';
import Header from './components/common/Header';
import LoginContainer from './components/pages/Admin/loginContainer';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kompweb</h1>
        <p> online IT solutions</p>
        {/* <h5> Client login</h5> */}
        <LoginContainer />
      </header>
      <Footer />
    </div>
  );
}

export default App;
