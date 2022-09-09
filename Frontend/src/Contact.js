import '../src/styles/ant.forms.css';
import { Button, Form, Input } from 'antd';
import React from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const Contact = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name={['user', 'website']}>
          <Input placeholder="Project" />
        </Form.Item>
        <Form.Item name={['user', 'introduction']}>
          <Input.TextArea placeholder="Message:" style={{ height: 100 }} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
