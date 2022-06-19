import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

const Admin = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Router>
        <Header />
        <div className="main">
          <div className="container">
            <Switch>
              {/* <Route path="/admin/" component={StoryManager} /> */}
              <Route path="/admin/" />
            </Switch>
          </div>
        </div>
        <div>
          <Footer layoutContainerCheck={'no-scroll'} />
        </div>
      </Router>
    )
  );
};

export default Admin;
