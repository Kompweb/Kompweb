import React from 'react';
// import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import {
  // AppstoreOutlined,
  HomeOutlined,
  // SettingOutlined,
  ProjectOutlined,
  // FundProjectionScreenOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const Navbar = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="home" icon={<HomeOutlined style={{ fontSize: '150%' }} />}>
      Home
    </Menu.Item>
    <Menu.SubMenu
      key="Projects"
      title="Projects"
      icon={<ProjectOutlined style={{ fontSize: '150%' }} />}
    >
      <Menu.Item
        key="one"
        icon={<GithubOutlined style={{ fontSize: '150%' }} />}
      >
        Full-Stack One
      </Menu.Item>
      <Menu.Item
        key="two"
        icon={<GithubOutlined style={{ fontSize: '150%' }} />}
      >
        Full-Stack Two
      </Menu.Item>
      <Menu.ItemGroup title="Back-end">
        <Menu.Item key="three">Project Three</Menu.Item>
        <Menu.Item key="four">Project Four</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Front-end">
        <Menu.Item key="five">Project Three</Menu.Item>
        <Menu.Item key="six">Project Four</Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);

export default Navbar;
