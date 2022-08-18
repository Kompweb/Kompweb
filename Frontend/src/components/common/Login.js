// import '../../styles/Login.css';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import Form from '../../features/login/form';
// import User from '../../features/login/user';
import schema from '../../features/login/schema';

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
  // Basic submit event handler and console.log to confirm form submitted
  //   const formSubmit = e => {
  //     e.preventDefault();
  //     console.log('submitted');
  //   };

  const [values, setValues] = useState(initialFormValues);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(initialFormErrors);

  const submit = () => {
    const newUser = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      tos: false,
    };
    addUsersToApi(newUser);
  };

  const validate = (name, value) => {
    Yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const change = (name, value) => {
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    schema.isValid(values).then(
      valid => {
        setDisabled(!valid);
      },
      [values]
    );
  });

  const addUsersToApi = () => {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        setUsers([res.data, ...users]);
        setValues(initialFormValues);
      })
      .catch(err => console.log(err));
  };

  //   const setFormErrors = (name, value) => {
  //     Yup.reach(schema, name)
  //       .validade(value)
  //       .then(() => setErrors({ ...errors, [name]: '' }))
  //       .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
  //   };

  //   const change = event => {
  //     const { checked, value, name, type } = event.target;
  //     // const { name } = event.target;
  //     const valueToUse = type === 'checkbox' ? checked : value;
  //     setFormErrors(name, valueToUse);
  //     // setFormErrors(name);
  //     setFormState({ ...formState, [name]: valueToUse });
  //     // setFormState({ ...formState });
  //   };

  //   const submit = event => {
  //     event.preventDefault();
  //     console.log('submitted!');

  // const newUser = { user: formState.user.trim() };
  // const [post, setPost] = useState([]);

  // axios
  //   .post('https://regres.in/api/users', newUser)
  //   .then(res => {
  //     // setFormState({ email: '', password: '' });
  //     setPost(res.data); // get just the form data from the REST api
  //     console.log('success', res);
  //     // console.log(res.users);
  //   })
  //   .catch(err => {
  //     console.log(err.response);
  //   });
  //   };

  //   const submit = event => {};
  /* Each time the form value state is updated, check to see if it is valid per our schema. 
  This will allow us to enable/disable the submit button.*/
  //   useEffect(() => {
  /* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
  //     schema.isValid(formState).then(valid => setDisabled(!valid));
  //   }, [formState]);

  //   const inputChange = e => {
  //     // let's pull the information of interest from the target of the event
  //     const { name, value } = e.target;
  //     // yup.reach will allow us to "reach" into the schema and test only one part.
  //     // We give reach the schema as the first argument, and the key we want to test as the second.
  //     Yup.reach(formSchema, name)
  //       //we can then run validate using the value
  //       .validate(value)
  //       // if the validation is successful, we can clear the error message
  //       .then(valid => {
  //         setErrors({
  //           ...errors,
  //           [name]: '',
  //         });
  //       })
  //       // if the validation is unsuccessful, we can set the error message to the message
  //       // returned from yup (that we created in our schema)
  //       .catch(err => {
  //         setErrors({
  //           ...errors,
  //           [name]: err.errors[0],
  //         });
  //       });

  //     // Whether or not our validation was successful, we will still set the state to the new value as the user is typing
  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     });
  //   };

  //   return (
  //     <div className="new-login">
  //       <div style={{ color: 'red' }}>
  //         <div>{errors.user}</div>
  //         <div>{errors.password}</div>
  //       </div>
  //       <form onSubmit={submit}>
  //         <label htmlFor="emailInput">
  //           <input
  //             onChange={change}
  //             value={formState.user}
  //             id="emailInput"
  //             type="email"
  //             name="email"
  //             placeholder="Email"
  //           />
  //         </label>
  //         {errors.email.length > 0 && <p className="error">{errors.email}</p>}

  //         <label htmlFor="passwordInput">
  //           <input
  //             onChange={change}
  //             id="passwordInput"
  //             type="password"
  //             name="password"
  //             placeholder="Password"
  //           />
  //         </label>
  //         {errors.password.length > 0 && (
  //           <p className="error">{errors.password}</p>
  //         )}

  //         {/* <label htmlFor="termsInput">
  //         Do you agree to the terms and conditions?
  //         <input id="termsInput" type="checkbox" name="terms" />
  //       </label> */}

  //         <button disabled={disabled}>Submit!</button>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    <div className="new-login">
      {/* <h1> Welcome! </h1> */}
      <Form
        values={values}
        submit={submit}
        change={change}
        disabled={disabled}
        errors={errors}
      />

      {/* {users.map(user => {
        return <User key={user.id} details={user} />;
      })} */}
    </div>
  );
}

export default LoginForm;
