import logo from "./assets/logo.svg";
import "./App.css";
import React from "react";
// import Header from "./components/common/Header";
import LoginContainer from "./components/pages/Admin/loginContainer";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <Header /> */}
        <h1>Kompweb</h1>
        <p> online IT solutions</p>
        <h5> Client login</h5>
        <LoginContainer />
      </header>
      <Footer />
      <form className='App-form'>
        <label>
          {/* Say 6! */}
          <input type='text' name='name' />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <a
        className='App-link-client'
        href='/login'
        target='_blank'
        rel='noopener noreferrer'></a>
    </div>
  );
}

export default App;
