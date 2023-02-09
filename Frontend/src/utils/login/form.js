// // import '../../styles/Login.css';

// import React from 'react';
// // import * as Yup from 'yup';
// // import Schema from './schema';
// import UseInput from './useInput';

// // const initialFormValues = {
// //   email: '',
// //   password: '',
// //   rememberMe: false,
// // };

// // const initialFormErrors = {
// //   email: '',
// //   password: '',
// // };

// const ClientLogin = () => {
//   // const [username, setUsername, handleUsername] = useInput('');
//   const [email, setEmail, handleEmail] = UseInput('');
//   const [password, setPassword, handlePassword] = UseInput('');

//   const resetValues = e => {
//     e.preventDefault();
//     setEmail('');
//     setPassword('');
//   };

//   // const [values, setValues] = useState(initialFormValues);
//   // const { submit, disabled } = props;
//   // const [user, setUser] = useState({ email: '', password: '' });
//   // const [errors, setErrors] = useState(initialFormErrors);

//   // const validate = (name, value) => {
//   //   Yup.reach(Schema, name)
//   //     .validate(value)
//   //     .then(() => setErrors({ ...errors, [name]: '' }))
//   //     .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
//   // };

//   // const handleChange = (name, value) => {
//   //   validate(name, value);
//   //   setValues({ ...values, [name]: value });
//   // };

//   // const handleChange = event => {
//   //   const { name, value, checked, type } = event.target;
//   //   const valueToUse = type === 'checkbox' ? checked : value;
//   //   handleChange(name, valueToUse);
//   //   validate(name, value);
//   //   setValues({ ...values, [name]: value });
//   //   setUser({ ...user, [event.target.name]: event.target.value });
//   // };

//   // const handleSubmit = event => {
//   //   event.preventDefault();
//   //   console.log('Received values of form: ', values);
//   //   setUser({ user_name: '', password: '' });
//   //   console.log(user.name);
//   //   console.log(user.password);
//   //   submit();
//   // };

//   return (
//     <div className="login-form">
//       {/* {console.log(user)} */}
//       {/* <form onSubmit={event => handleSubmit(event)}> */}
//       <form onSubmit={resetValues}>
//         <label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Email"
//             // onChange={event => handleChange(event)}
//             onChange={e => handleEmail(e.target.value)}
//             // rules={[
//             //   {
//             //     required: true,
//             //     message: 'Please input your email!',
//             //   },
//             // ]}
//           />
//         </label>
//         <label>
//           <input
//             id="password"
//             type="text"
//             name="password"
//             value={password}
//             placeholder="Passwordz"
//             // onChange={event => handleChange(event)}
//             onChange={e => handlePassword(e.target.value)}
//             // rules={[
//             //   {
//             //     required: true,
//             //     message: 'Please input your password!',
//             //   },
//             // ]}
//           />
//         </label>
//         <div className="last-block">
//           <label>
//             Rememberz me:
//             <input
//               name="rememberMe"
//               type="checkbox"
//               // checked={values.tos}
//               // The expression `formState.isGoing` evaluates to either true or false.
//               // onChange={handleChange}
//             />
//           </label>
//           {/* <button disabled={disabled}>Submit</button> */}
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ClientLogin;
