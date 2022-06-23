import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { Typography } from 'antd';
import { Button, Menu } from 'antd';
// import {
//   HomeOutlined,
//   MenuOutlined,
//   TrophyOutlined,
//   LogoutOutlined,
//   QuestionCircleOutlined,
//   TableOutlined,
// } from '@ant-design/icons';

export default function Header() {
  return (
    <Button>
      {/* <Dropdown> */}
      {/*Inside the IconButton, we 
             can render various icons*/}
      <Menu
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {/*This is a simple Menu 
               Icon wrapped in Icon */}
        {/* <MenuIcon /> */}
      </Menu>
      {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
      Im a header
      {/* </Typography> */}
      {/* <Button color="inherit">Login</Button> */}
      {/* </Dropdown> */}
    </Button>
  );
}
