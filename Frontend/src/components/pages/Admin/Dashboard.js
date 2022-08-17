import React from 'react';
// import '../../../styles/style.css';
// import Languages from '../../common/Languages';
import Login from '../../common/signUp';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        {/* <h1>ADMIN</h1> */}
        <a href="/admin" target="_blank" rel="noopener noreferrer">
          Sign Up
        </a>
        <Login />
      </header>
      {/* <Languages /> */}
    </div>
  );
}

export default AdminDashboard;
