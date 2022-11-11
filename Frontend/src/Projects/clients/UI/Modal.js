import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

class App extends React.Component {
  initialState = {
    form: {
      name: '',
      username: '',
    },
  };

  state = this.initialState;

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.form((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { name, username } = this.state.form;
  //   const { addUser } = this.props;

  //   const newUser = {
  //     name,
  //     username,
  //   };

  //   addUser(newUser);
  //   this.setState(this.initialState);
  //   this.props.onClose();

  // };

  render() {
    const { name, username } = this.state.form;
    const { isOpen, onClose } = this.props;

    return (
      <Modal
        open={isOpen}
        title="Create A New User:"
        onCancel={onClose}
        // onOk={this.resetFields()}
        footer={null}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 28 }}
          onSubmit={this.handleSubmit}
        >
          <Form.Item label="Name">
            <Input
              name="name"
              value={name}
              onChange={this.handleChange}
              autoFocus={true}
            />
          </Form.Item>

          <Form.Item label="Username">
            <Input
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </Form.Item>

          <Button
            type="submit"
            content="Submit"
            htmlType="submit"
            onClick={this.handleSubmit}
          >
            Add User
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default App;
