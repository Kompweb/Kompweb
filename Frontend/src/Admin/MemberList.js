import React from 'react';

export default function UserList(props) {
  return (
    <div className="user-list">
      {props.users.map(user => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
}

function UserDetails(props) {
  const { name, bio } = props.user;

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <div className="user-bio">
        bio: <em>{bio}</em>
      </div>
    </div>
  );
}
