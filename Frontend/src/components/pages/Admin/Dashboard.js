import React from 'react';
import Languages from '../../common/Languages';
import Login from '../../common/Login';

function AdminDashboard() {
  return (
    <div className="Dashboard">
      <header className="admin-header">
        <h1>ADMIN</h1>
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
    </div>
  );
}

export default AdminDashboard;
