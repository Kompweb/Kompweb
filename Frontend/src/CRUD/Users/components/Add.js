import React, { Component } from 'react';
import { Modal, Form, Button, Input, Checkbox } from 'antd';

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: '',
        username: '',
      },
      showModal: false,
      id: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.OpenModal = this.OpenModal.bind(this);
    // this.CloseModal = this.CloseModal.bind(this);
  }

  OpenModal() {
    this.setState({ showModal: true });
  }
  CloseModal = () => {
    this.setState({ showModal: false });
    console.log('cancel modal');
  };

  handleChange = event => {
    const { name, username, value } = event.target;
    this.setState({
      form: { ...this.state.form, [name]: value, [username]: value },
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
    const { name, username } = this.state.form;
    const { addRow } = this.props;

    const newUser = {
      name,
      username,
    };

    addRow(newUser);
    this.setState(this.initialState);
    this.setState({ showModal: false });
    console.log('A new User was submitted: ', newUser);
  };

  render() {
    // const { id } = this.state;

    return (
      <>
        <Button type="primary" onClick={this.OpenModal}>
          Add User
        </Button>
        <div
        // key={name.id}
        >
          <Modal
            title="Add A New User:"
            open={this.state.showModal}
            onOk={this.handleSubmit}
            id={this.id}
            // onOk={this.resetFields}
            onCancel={this.CloseModal}
            // onOk={() => {
            //   this.state.form
            //     .handleSubmit()
            //     .then(values => {
            //       this.form.resetFields(values);
            //     })
            //     .catch(info => {
            //       console.log('Validate Failed:', info);
            //     });
            // }}
            // footer={null}
          >
            <Form
            // onSubmit={this.state.resetFields}
            // fields={fields}
            // onSubmit={handleSubmit}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Name! is required',
                  },
                ]}
              >
                <Input
                  type="textarea"
                  placeholder="name"
                  name="name"
                  // value={this.name}
                  onChange={this.handleChange}
                  // autoFocus={true}
                />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'A Username! is required',
                  },
                ]}
              >
                <Input
                  type="textarea"
                  placeholder="username"
                  name="username"
                  // value={this.username}
                  onChange={this.handleChange}
                  // autoFocus={true}
                />
              </Form.Item>
              <Form.Item>
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
              {/* <FormItem>
              <Button
                type="submit"
                content="Submit"
                htmlType="submit"
                onClick={() => {
                  this.props.form.resetFields();
                }}
                // onClick= disabled={!name || !username}
              >
                Clear
              </Button>
            </FormItem> */}
            </Form>
          </Modal>
        </div>
      </>
    );
  }
}

export default Edit;
