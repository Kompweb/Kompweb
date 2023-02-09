import React, { useState, useEffect } from 'react';
import '../styles/admin.css';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('user is required')
    .min(6, 'user needZ to be 6 chars min'),
  plan: yup.string().oneOf(['premium', 'basic'], 'you must select a star'),
  email: yup.string().required('must be a valid email address'),
  role: yup.string().oneOf(['1', '2', '3'], 'you must choose a role'),
  agree: yup.boolean().oneOf([true], 'you must give away your data'),
});

export default function ClientSignUp() {
  const [form, setForm] = useState({
    name: '',
    plan: '',
    email: '',
    password: '',
    agree: false,
    role: '',
  });

  const [errors, setErrors] = useState({
    name: ' ',
    plan: '',
    email: '',
    password: '',
    agree: '',
    role: '',
  });

  const [disabled, setDisabled] = useState(true);

  // const updateForm = (inputName, inputValue) => {
  //   setForm({ ...form, [inputName]: inputValue });
  // };

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const change = event => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    event.preventDefault();
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };
  // // Basic submit event handler and console.log to confirm form submitted
  const submit = e => {
    e.preventDefault();
    const newUser = {
      user: form.user.trim(),
      plan: form.plan,
      email: form.email,
      agree: form.agree,
      role: form.role,
    };

    axios
      .post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res);
        setForm({ user: '', plan: '', email: '', agree: false, bio: '' });
      })
      .catch(err => {
        console.log(err);
      });

    console.log('form has been submitted');
  };

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid));
  }, [form]);

  return (
    <div className="admin-form">
      {/* <h1> User Sign Up </h1> */}
      <div className="react-form">
        <form onSubmit={submit}>
          <label>
            <input
              className="placeholders"
              onChange={change}
              value={form.user}
              name="name"
              type="text"
              placeholder="Username"
            />
          </label>
          <div className="admin-checkbox">
            <label>
              Basic
              <input
                onChange={change}
                checked={form.plan === 'basic'}
                value="basic"
                name="plan"
                type="radio"
              />
            </label>
            <label>
              Premium
              <input
                onChange={change}
                checked={form.plan === 'premium'}
                value="premium"
                name="plan"
                type="radio"
              />
            </label>
          </div>

          <label htmlFor="emailInput">
            <input
              className="placeholders"
              id="emailInput"
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>

          <label htmlFor="passwordInput">
            <input
              className="placeholders"
              id="passwordInput"
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>

          <div className="conditions">
            <label htmlFor="termsInput">
              Terms and conditions
              <input id="termsInput" type="checkbox" name="terms" />
            </label>
            <label>
              Newsletter subscribe
              <input
                onChange={change}
                checked={form.agree}
                name="agree"
                type="checkbox"
              />
            </label>
          </div>
          <label>
            <select onChange={change} value={form.role} name="role">
              <option value="">---Select Your Role</option>
              <option value="1">Instructor</option>
              <option value="2">Admin</option>
              <option value="3">User</option>
            </select>
          </label>
          <br />
          <button disabled={disabled}>submit</button>
        </form>
        <div style={{ color: 'red' }}>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.role}</div>
        </div>
      </div>
    </div>
  );
}
