import React from 'react';

export default function Member({ details }) {
  if (!details) {
    return <h4> Fetching Details </h4>;
  }

  return (
    <div className="member container">
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
