import React from 'react';
import '../../src/styles/projects.list.css';

import { DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="admin-dashboards">
      <Link to={'/login'}>
        <DashboardOutlined className="icons" />
        <h3>Online Dashboards</h3>
      </Link>
      <p>
        Anytime and anywhere, our customers can track their progress to see when
        theyll reach their next milestone
      </p>
    </div>
  );
}

export default AdminDashboard;
