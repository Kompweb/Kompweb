import React from 'react';
// import './Card.css';

const Card = props => {
  // return <div>{props.children}</div>;
  const classes = 'card ' + props.className;
  return <div>{props.children}</div>;
};

export default Card;
