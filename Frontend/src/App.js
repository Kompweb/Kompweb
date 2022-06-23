import logo from './assets/logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>KOMPWEB</h1>
        <p> Online Solutions</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <form className="App-form">
          <label>
            {/* Say 9! */}
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <a
          className="App-link-client"
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Log-in
        </a>
      </header>
    </div>
  );
}

export default App;
