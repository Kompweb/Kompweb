import React from 'react';

const AddUserBtn = ({ onClick, children }) => {
  return (
    <button className="addUser-btn" onClick={onClick}>
      Add User{children}
    </button>
  );
};

export default AddUserBtn;
