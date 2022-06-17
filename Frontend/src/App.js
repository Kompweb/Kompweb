import logo from "./assets/logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Kompweb</h1>
        <p> Online Solutions</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className='App-link'
          href='/contact-us'
          target='_blank'
          rel='noopener noreferrer'>
          CONTACT
        </a>
      </header>
    </div>
  );
}

export default App;
