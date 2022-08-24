import React, { useState, useEffect } from 'react';
// import '../../styles/admin.css';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('user is required')
    .min(6, 'user needs to be 6 chars min'),
  star: yup.string().oneOf(['wars', 'trek'], 'you must select a star'),
  language: yup.string().oneOf(['1', '2', '3'], 'you must choose a language'),
  agree: yup.boolean().oneOf([true], 'you must give away your data'),
});

export default function ClientSignUp() {
  const [form, setForm] = useState({
    name: '',
    password: '',
    email: '',
    star: '',
    agree: false,
    website: '',
    language: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    password: '',
    email: '',
    star: '',
    agree: '',
    website: '',
    language: '',
  });

  const [disabled, setDisabled] = useState(true);

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
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };
  // // Basic submit event handler and console.log to confirm form submitted
  const formSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid));
  }, [form]);

  return (
    <div className="admin-form">
      <h1> User Sign Up </h1>
      <div className="react-form">
        <form formSubmit={formSubmit}>
          <label>
            <input
              className="placeholders"
              onChange={change}
              value={form.name}
              name="name"
              type="text"
              placeholder="Username"
            />
          </label>
          <div className="movies-checkbox">
            <label>
              Basic
              <input
                onChange={change}
                checked={form.star === 'trek'}
                value="trek"
                name="star"
                type="radio"
              />
            </label>
            <label>
              Premium
              <input
                onChange={change}
                checked={form.star === 'wars'}
                value="wars"
                name="star"
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
            <select onChange={change} value={form.language} name="language">
              <option value="">--Languages--</option>
              <option value="1">JavaScript</option>
              <option value="2">Python</option>
              <option value="3">Java</option>
            </select>
          </label>
          <br />
          <button disabled={disabled}>submit</button>
        </form>
        <div style={{ color: 'red' }}>
          <div>{errors.name}</div>
          <div>{errors.star}</div>
          <div>{errors.agree}</div>
          <div>{errors.language}</div>
        </div>
      </div>
    </div>
  );
}
