import React from 'react';
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

  const resetValues = e => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    <>
      {/* <h1> homeForm </h1> */}
      <form onSubmit={resetValues}>
        <label>
          {/* First Name<br></br> */}
          <input
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
        <label style={{ color: 'white', width: 300 }}>
          Remember <em>me</em>
          {/* <br></br> */}
          <input
            style={{ height: 16 }}
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
          <div>{errors.user_name}</div>
          <div>{errors.password}</div>
        </div>
      </form>
    </>
  );
};

export default Form;
