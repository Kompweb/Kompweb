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
        <div className="languages">
          <img
            alt="JavaScript"
            width="26px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          {/* <img
          alt="Typescript"
          width="36px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        /> */}
          {/* <img
          alt="React"
          width="36px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        /> */}
          <img
            alt="Node.js"
            width="26px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <img
            alt="Python"
            width="26px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <img
            alt="hmtl5"
            width="26px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          />
          <img
            alt="css"
            width="26px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          />
          <img
            alt="git"
            width="26px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
          />
          <img
            alt="Visual Studio Code"
            width="26px"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
          />
          <img
            alt="github"
            width="26px"
            src="https://img.icons8.com/nolan/72/github.png"
          />
          {/* <img
            alt="less"
            width="26px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg"
          /> */}
        </div>
      </header>

      <Footer />
    </div>
  );
}

export default App;
