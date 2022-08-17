import React from 'react';
import '../styles/projects.list.css';
import { DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="admin-dashboards">
      <Link to={'/admin'}>
        <DashboardOutlined className="icons" />
        <h4>Online Dashboards</h4>
      </Link>
      <p>
        Anytime and anywhere, our customers can track their progress to see when
        theyll reach their next milestone
      </p>
    </div>
  );
}

export default AdminDashboard;
