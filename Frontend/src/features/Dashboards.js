import React from 'react';

import { DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="projects">
      <h4>Online Dashboards</h4>
      <p>
        Anytime and anywhere, our customers can track their progress to see when
        theyll reach their next milestone.
      </p>
      <Link to={'/admin'}>
        <DashboardOutlined className="icons" />
      </Link>
    </div>
  );
}

export default AdminDashboard;
