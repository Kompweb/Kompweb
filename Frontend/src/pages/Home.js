import logo from '../../src/assets/logo.svg';
// import React from 'react';
import LoginForm from '../common/Login';

function Home() {
  return (
    <div className="home-header">
      <img src={logo} className="react-logo" alt="logo" />
      <a
        className="link-client"
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        Client Login
      </a>
      <LoginForm />
    </div>
  );
}

export default Home;
