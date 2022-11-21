import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        username: '',
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      console.log('componentDidUpdate:', prevState);
      const user = this.props.getUserById(this.props.id);
      this.setState({
        form: {
          name: user.name,
          username: user.username,
        },
      });
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, username } = this.state.form;
    const { updateRow } = this.props;
    const updatedUser = {
      name,
      username,
    };
    updateRow(this.props.id, updatedUser);
    this.props.onClose();
  };

  render() {
    const { name, username } = this.state.form;
    const { isOpen, onClose } = this.props;

    return (
      <Modal
        title="Edit user"
        open={isOpen}
        onClose={onClose}
        onOk={this.handleSubmit}
        onCancel={onClose}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 28 }}
          onSubmit={this.handleSubmit}
        >
          <Form.Item label="Name">
            <Input name="name" value={name} onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label="Username">
            <Input
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </Form.Item>
          {/* <Form.Item label="Date of birth: ">
          </Form.Item> */}
        </Form>
      </Modal>
    );
  }
}

export default Edit;
