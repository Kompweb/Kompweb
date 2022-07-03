import logo from '../../../src/assets/logo.svg';
import React from 'react';
import Login from '../../components/common/Login';
// import Languages from '../../components/common/Languages';

function Home() {
  return (
    <div className="home-header">
      <img src={logo} className="react-logo" alt="logo" />
      {/* <h1>Kompweb</h1> */}
      <h3>React Solutions</h3>
      <a
        className="link-client"
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        Client Log-in
      </a>
      <Login />
      {/* <Languages /> */}
    </div>
  );
}

export default Home;
