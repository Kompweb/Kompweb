// import './App.css';
import './styles/Home.less';
import React from 'react';
// import { Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';

// import Projects from './components/pages/Projects';
// import Whoops from './components/pages/Whoops';

function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar className="Bar" />
      {/* <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="*" element={<Whoops />} />
      </Switch> */}
      <Home />
      {/* </Router> */}
      <Footer />
    </>
  );
}

export default App;
