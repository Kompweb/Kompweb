import '../../styles/Login.css';

import React, { useState } from 'react';
import * as Yup from 'yup';
import Schema from './schema';
import '../../styles/Login.css';

const initialFormValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const initialFormErrors = {
  email: '',
  password: '',
};

const ClientLogin = () => {
  const resetValues = e => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  const [values, setValues] = useState(initialFormValues);
  const { submit, disabled } = props;
  const [user, setUser] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    Yup.reach(Schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleChange = event => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    handleChange(name, valueToUse);
    validate(name, value);
    setValues({ ...values, [name]: value });
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Received values of form: ', values);
    setUser({ user_name: '', password: '' });
    console.log(user.name);
    console.log(user.password);
    submit();
  };

  return (
    <div className="login-form">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Email"
            onChange={event => handleChange(event)}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          />
        </label>
        <label>
          <input
            type="text"
            name="password"
            value={values.password}
            placeholder="Password"
            onChange={event => handleChange(event)}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          />
        </label>
        <div className="last-block">
          <label>
            Remember me:
            <input
              name="rememberMe"
              type="checkbox"
              checked={values.tos} // The expression `formState.isGoing` evaluates to either true or false.
              onChange={handleChange}
            />
          </label>
          <button disabled={disabled}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ClientLogin;
