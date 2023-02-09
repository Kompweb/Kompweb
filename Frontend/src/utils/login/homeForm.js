import React from 'react';
import '../../styles/Login.css';
import { Button, Checkbox, Form, Input } from 'antd';
import UseInput from './useInput';
// import AxiosWithAuth from '../../api/axiosAuth';

const LoginForm = () => {
  const [username, setUsername, handleUsername] = UseInput('');
  const [password, setPassword, handlePassword] = UseInput('');

  // const token = localStorage.getItem('token');

  // AxiosWithAuth.post('/mocks/data', UseInput.newFriend, {
  //   headers: {
  //     authorization: token,
  //   },
  // })
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const resetValues = event => {
    event.preventDefault();
    setUsername('');
    setPassword('');
    // console.log(username);
    // console.log(password);
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
        autoComplete="on"
      >
        <Form.Item
          name="username"
          onSubmit={resetValues}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            placeholder="Username"
            value={username}
            onChange={e => handleUsername(e.target.value)}
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
