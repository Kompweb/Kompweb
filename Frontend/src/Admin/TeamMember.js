import React from 'react';

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
    <form className="team-form" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Username
          <input
            type="text"
            value={values.username}
            placeholder="Username"
            onChange={onChange}
            name="username"
          />
        </label>

        <label>
          Email
          <input
            type="text"
            value={values.email}
            placeholder="Email"
            onChange={onChange}
            name="email"
          />
        </label>

        <lable>
          Role
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">---Select Your Role</option>
            <option value="Instructor">Instructor</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </lable>

        <div className="submit">
          <button style={{ width: 140 }}>submit</button>
        </div>
      </div>
    </form>
  );
}
