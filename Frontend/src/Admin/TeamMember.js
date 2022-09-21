import React from 'react';
import '../styles/admin.css';

export default function TeamMemberForm(props) {
  const { values, update, submit } = props;

  const onChange = event => {
    const { name, value } = event.target;
    update(name, value);
  };

  const onSubmit = event => {
    event.preventDefault();
    submit();
  };

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      <div className="form-group inputs">
        {/* Username */}
        <input
          style={{
            width: 200,
            height: 46,
            marginTop: 20,
            color: 'black',
            paddingLeft: 10,
          }}
          type="text"
          value={values.username}
          placeholder="Username"
          onChange={onChange}
          name="username"
        />

        {/* Email */}
        <input
          style={{ width: 200, height: 46, color: 'black', paddingLeft: 10 }}
          type="text"
          value={values.email}
          placeholder="Email"
          onChange={onChange}
          name="email"
        />

        {/* Role */}
        <select
          style={{ width: 200, color: 'black' }}
          name="role"
          value={values.role}
          onChange={onChange}
        >
          <option value="">---Select Your Role</option>
          <option value="Instructor">Instructor</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>

        <div className="submit">
          <button style={{ width: 200, marginTop: 20 }}>submit</button>
        </div>
      </div>
    </form>
  );
}
