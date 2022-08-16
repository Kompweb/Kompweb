// import React from 'react';
import React, { useState } from 'react';
import '../../styles/Login.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

function App() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = event => {
    if (/^[a-zA-Z]+$/.test(event.target.value)) {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser({ username: '', password: '' });
  };

  return (
    <div className="home-header">
      {/* {console.log(user)} */}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={event => handleChange(event)}
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
          <br />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={event => handleChange(event)}
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </label>
        <br />
        {/* <label>
          <input type="checkbox" className="remembeP"></input>
          Forgot password
          <a className="login-form-forgot" href=""></a>
        </label>
        <button type="primary" htmlType="submit" className="login-btn">
          Log in
        </button>
        <span>Or</span>
        <a className="Register" href="/contact">
          register now!
        </a> */}
      </form>
    </div>
  );
}

export default App;
