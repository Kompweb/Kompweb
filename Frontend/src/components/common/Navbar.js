import React from 'react';
import 'antd/dist/antd.css';
import '../../styles/Navbar.less';

import {
  HomeOutlined,
  ProjectOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const Navbar = () => (
  <div className="Navbar-top">
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Menu.Item
        key="home"
        icon={<HomeOutlined style={{ fontSize: '300%' }} />}
      >
        Home
      </Menu.Item>
      <Menu.SubMenu
        key="Projects"
        title="Projects"
        icon={<ProjectOutlined style={{ fontSize: '300%' }} />}
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
  </div>
);

export default Navbar;
