import logo from "./assets/logo.svg";
import "./App.css";
import React from "react";
// import Header from "./components/common/Header";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <Header /> */}
        <h1>kompWeb</h1>
        <p> online IT solutions</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <form className='App-form'>
          <label>
            {/* Say 9! */}
            <input type='text' name='name' />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <a
          className='App-link-client'
          href='/login'
          target='_blank'
          rel='noopener noreferrer'>
          Client Login
        </a>
      </header>
    </div>
  );
}

export default App;
