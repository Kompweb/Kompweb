// import '../../styles/Login.css';
import React, { useState, useEffect } from 'react';
// import React from 'react';

import * as Yup from 'yup';
import axios from '../api/axiosAuth';
import Form from '../features/login/homeForm';
import Schema from '../features/login/schema';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
};

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

const initialUsers = [];

function LoginForm() {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(true);

  const submit = () => {
    const newUser = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      tos: false,
    };
    console.log(newUser);
    addUsersToApi(newUser);
  };

  const validate = (name, value) => {
    Yup.reach(Schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const change = (name, value) => {
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    Schema.isValid(values).then(
      valid => {
        setDisabled(!valid);
      },
      [values]
    );
  });

  const addUsersToApi = props => {
    axios
      .post('http://localhost:3000/api/login', values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/login');
        setUsers([res.data, ...users]);
        setValues(initialFormValues);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="new-login">
      <Form
        values={values}
        submit={submit}
        change={change}
        disabled={disabled}
        errors={errors}
      />
    </div>
  );
}

export default LoginForm;
