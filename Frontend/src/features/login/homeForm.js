import '../../styles/Login.css';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import UseInput from './useInput';

const LoginForm = () => {
  const [email, setEmail, handleEmail] = UseInput('');
  const [password, setPassword, handlePassword] = UseInput('');

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const resetValues = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-form">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onSubmit={resetValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={e => handleEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="password"
          type="text"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={e => handlePassword(e.target.value)}
          />
        </Form.Item>
        <div className="last-block">
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
