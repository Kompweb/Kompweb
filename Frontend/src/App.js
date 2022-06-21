import logo from './assets/logo.svg';
import './App.css';
import React from 'react';
import Header from './components/common/Header';
import LoginContainer from './components/pages/Admin/loginContainer';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="Home">
      <Header className="Header" />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" href="/" alt="logo" />
          <h1>Kompweb</h1>
          <p> online IT solutions</p>
          <LoginContainer />
        </header>
        <h5> We use React with TypeScript for our frontend codebase. </h5>
        <Footer />
      </div>
    </div>
  );
}

export default App;
