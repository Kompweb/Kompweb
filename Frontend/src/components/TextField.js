import React from 'react';

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="addUser">
      <label className="labelUser">{label}</label>
      <input
        className="inputUser"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
