// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import schema from './schema';

// const initialFormValues = {
//   email: '',
//   password: '',
//   rememberMe: false,
// };

// const initialFormErrors = {
//   email: '',
//   password: '',
// };

// const App = props => {
//   const [values, setValues] = useState(initialFormValues);
//   const { submit, disabled } = props;
//   const [user, setUser] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState(initialFormErrors);

//   const validate = (name, value) => {
//     Yup.reach(schema, name)
//       .validate(value)
//       .then(() => setErrors({ ...errors, [name]: '' }))
//       .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
//   };

//   //   const handleChange = (name, value) => {
//   //     validate(name, value);
//   //     setValues({ ...values, [name]: value });
//   //   };

//   const handleChange = event => {
//     const { name, value, checked, type } = event.target;
//     const valueToUse = type === 'checkbox' ? checked : value;
//     handleChange(name, valueToUse);
//     validate(name, value);
//     setValues({ ...values, [name]: value });
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log('Received values of form: ', values);
//     setUser({ user_name: '', password: '' });
//     // console.log(user.name);
//     // console.log(user.password);
//     submit();
//   };

//   return (
//     <div >
//       {console.log(user)}
//       <form onSubmit={event => handleSubmit(event)}>
//         <label>
//           {/* Username: */}
//           <input
//             type="email"
//             name="email"
//             value={values.email}
//             placeholder="Email"
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <label>
//           {/* Password: */}
//           <input
//             type="text"
//             name="password"
//             value={values.password}
//             placeholder="Password"
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <button disabled={disabled}>Submit</button>
//         <label>
//           Remember me:
//           <input
//             name="rememberMe"
//             type="checkbox"
//             checked={values.tos} // The expression `formState.isGoing` evaluates to either true or false.
//             onChange={handleChange}
//           />
//         </label>
//         <div style={{ color: 'red' }}>
//           <div>{errors.Username}</div>
//           <div>{errors.password}</div>
//           <div>{errors.tos}</div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;
