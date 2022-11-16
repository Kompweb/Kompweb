import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import Button from './UI/Button';

// import AddUser from './Create';
import UsersList from './Read';
import { users } from './data';
// import View from './clients/View';

const App = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [usersList, setUsersList] = useState(users);
  // console.log(usersList);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClose = () => {
    props.resetFields();
  };
  const onAddUser = (newName, newUsername) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: newName, username: newUsername, id: Math.random().toString() },
      ];
    });
  };

  const addUserHandler = event => {
    event.preventDefault();
    console.log('Name:', enteredName, 'Username:', enteredUsername);
    if (
      enteredName.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      return;
    }
    if (+enteredUsername < 1) {
      return;
    }

    // props.onAddUser(enteredName, enteredUsername);
    setEnteredName('');
    setEnteredUsername('');
    setIsModalOpen(false);
  };

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  return (
    <>
      {/* <AddUser onAddUser={onAddUser} /> */}
      <div className="clientHeader">
        <Button type="primary" onClick={showModal}>
          Add User
        </Button>
      </div>

      <Modal
        title="Basic Modal"
        okText="Add User"
        open={isModalOpen}
        onOk={addUserHandler}
        onClose={onClose}
        // newUser={newUser}
        onCancel={handleCancel}
        // onCreate={onCreate}
        // footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 28 }}
          onSubmit={onAddUser}
          // onSubmit={() => {
          //   form.validateFields().then(values => {
          //     form.resetFields();
          //     onCreate(values);
          //   });
          // }}

          // onSubmit={handleSubmit}
          // onSubmit={addUserHandler}

          // onOk={() => {
          //   form
          //     .validateFields()
          //     .then(values => {
          //       form.resetFields();
          //       onCreate(values);
          //     })
          //     .catch(info => {
          //       console.log('Validate Failed:', info);
          //     });
          // }}
        >
          <Form.Item
            name="name"
            label="Name"
            htmlFor="Name"
            rules={[
              {
                required: true,
                message: 'Please input name:',
              },
            ]}
          >
            <Input
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
              autoFocus={true}
            />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            htmlFor="Username"
            rules={[
              {
                required: true,
                message: 'Username is required!',
              },
            ]}
          >
            <Input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
              autoFocus={true}
            />
          </Form.Item>
          {/* <Button type="submit" onClick={addUserHandler}> Add User </Button> */}
        </Form>
      </Modal>

      <div className="client-box">
        <UsersList users={usersList} />
        {/* <View /> */}
      </div>
    </>
  );
};

export default App;
