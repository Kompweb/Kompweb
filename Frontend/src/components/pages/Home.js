import logo from '../../../src/assets/logo.svg';
import '../../styles/Login.css';
import React from 'react';
// import Login from '../../components/common/Login';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Checkbox, Form, Input, Button } from 'antd';
import LoginForm from '../common/Login';
// import Signup from '../../features/login/signup';
// import Languages from '../common/Languages';

function Home() {
  return (
    <div className="home-header">
      <img src={logo} className="react-logo" alt="logo" />
      <a
        className="link-client"
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign up
      </a>
      {/* <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className="remembeP">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn">
            Log in
          </Button>
          <br />
          <span>Or</span>{' '}
          <a className="Register" href="/contact">
            register now!
          </a>
        </Form.Item>
      </Form> */}
      {/* <Login /> */}
      {/* <Languages /> */}
      <LoginForm />
      {/* <Signup /> */}
    </div>
  );
}

export default Home;
