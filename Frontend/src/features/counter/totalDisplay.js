import React from 'react';
// import '../../styles/counter.module.css';

const TotalDisplay = props => {
  const { value } = props;

  return (
    <div className="row">
      <div className="value">
        <textarea
          className="form-control"
          readOnly
          value={value}
          rows="1"
          id="total"
          type="text"
          name="ans"
        ></textarea>
      </div>
    </div>
  );
};

export default TotalDisplay;
