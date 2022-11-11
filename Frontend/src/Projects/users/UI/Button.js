import React from 'react';
import { Button } from 'antd';

const AddUserButton = props => {
  return (
    <Button type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default AddUserButton;
