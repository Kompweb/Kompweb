import React from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import useInput from './useInput';

const Form = props => {
  const { values, change, disabled, errors } = props;

  const onChange = e => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  const [username, setUsername, handleUsername] = useInput('');
  const [password, setPassword, handlePassword] = useInput('');
  const [email, setEmail, handleEmail] = useInput('');

  const resetValues = e => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <>
      {/* <h1> uSER fORMZ</h1> */}
      <form onSubmit={resetValues}>
        <label>
          {/* First Name<br></br> */}
          <input
            // prefix={<UserOutlined className="site-form-item-icon" />}
            className="username-text"
            id="username"
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={e => handleUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          {/* Email<br></br> */}
          <input
            // prefix={<LockOutlined style={{ color: 'red' }} />}
            className="email-text"
            id="email"
            name="email"
            onChange={e => handleEmail(e.target.value)}
            placeholder="Email"
            type="text"
            value={email}
          />
        </label>
        <br></br>
        <label>
          {/* Password<br></br> */}
          <input
            className="password-test"
            id="password"
            name="password"
            onChange={e => handlePassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />
        </label>
        <br></br>
        <label style={{ color: 'white' }}>
          Agree to the <em>Terms of Service</em>
          <br></br>
          <input
            type="checkbox"
            name="tos"
            checked={values.tos}
            onChange={onChange}
          />
        </label>
        <br></br>
        <button disabled={disabled}>Submit</button>
        <br />
        <div style={{ color: 'red' }}>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </form>
    </>
  );
};

export default Form;
