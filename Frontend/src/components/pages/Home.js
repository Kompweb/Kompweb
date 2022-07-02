import logo from '../../../src/assets/logo.svg';
import '../../App.css';
import React from 'react';
import Login from '../../components/common/Login';
import Languages from '../../components/common/Languages';
// import SearchForm from '../../components/pages/SearchForm';

function Home() {
  return (
    <div className="home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>KOMPWEB</h1>
        <h2>Online Solutions</h2>
        <a
          className="App-link-client"
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Log-in
        </a>
        <Login />
      </header>
      <Languages />
      {/* <br></br>
      <SearchForm /> */}
    </div>
  );
}

export default Home;
