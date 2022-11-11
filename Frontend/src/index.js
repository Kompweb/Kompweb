import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      > */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </Auth0Provider> */}
    </Router>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
