import React from 'react';
import Navbar from './components/common/Navbar';
import Languages from './components/common/Languages';
import Footer from './components/common/Footer';

function AdminDashboard() {
  return (
    <div className="Dashboard">
      <Navbar />
      <header className="admin-header">
        <h1>KOMPWEB</h1>
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
      <Footer />
    </div>
  );
}

export default AdminDashboard;
