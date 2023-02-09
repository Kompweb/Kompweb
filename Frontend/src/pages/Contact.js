import React from 'react';
import '../../src/styles/ant.forms.css';
import { Button, Form, Input } from 'antd';
import UseInput from '../../src/utils/login/useInput';

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

const ContactForm = () => {
  const [name, setName, handleName] = UseInput('');
  const [email, setEmail, handleEmail] = UseInput('');

  const onFinish = values => {
    console.log(values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const resetValues = event => {
    event.preventDefault();
    setEmail('');
    setName('');
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <Form
        method="POST"
        data-netlify="true"
        // netlify="true"
        // netlify-honeypot="bot-field"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        onSubmit={resetValues}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        // autoComplete="on"
      >
        <Form.Item
          name="name"
          onSubmit={resetValues}
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Name"
            value={name}
            onChange={e => handleName(e.target.value)}
          />
        </Form.Item>
        <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
          <Input
            placeholder="Email"
            value={email}
            onChange={e => handleEmail(e.target.value)}
          />
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

export default ContactForm;
