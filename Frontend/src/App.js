import './styles/global.css';
import React from 'react';
import Navbar from './components/common/Navbar';
import NavRoutes from '../src/utils/routes';
import Footer from './components/common/Footer';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <NavRoutes />
      <p className="express-content">{!data ? 'Loading...' : data}</p>
      <Footer />
    </div>
  );
}

export default App;
