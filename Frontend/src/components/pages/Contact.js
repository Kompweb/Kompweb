import React, { useState } from 'react';
import '../../Style.css';

function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  //   const [password, setPassword] = useState('');
  return (
    <div className="form-container">
      <form className="contact-form">
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Message:"
          type="text"
          name="text"
          required
        />
        {/* <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ContactUs;
// function ContactUs() {
//   return (
//     <div className="contact-us">
//       <p>Coming soon...</p>
//       <Form>Form here</Form>
//       <SubmitForm />
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industrys standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>
//     </div>
//   );
// }

// export default ContactUs;
