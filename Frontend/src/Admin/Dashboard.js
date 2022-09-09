import React from 'react';
import '../../src/styles/style.css';
import Login from '../common/userSignUp';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        {/* <h1>ADMIN</h1> */}
        <a
          className="sign-up-client"
          href="/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
        <Login />
      </header>
    </div>
  );
}

export default AdminDashboard;
