// import React from 'react';
// import Add from './Add';
// class App extends React.Component {
//   state = {isOpen: false,};
//   render() {return <Add />}}
// export default App;
import '../../styles/usersList.css';
import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
// import { users } from '../clients/data/liszt';

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [name, username] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [enteredName, setEnteredName] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');

  // const [userList, setUserList] = useState(users);
  const [form] = Form.useForm();

  // const updateList = (data, editFlag) => {
  //   let newList = [...userList];
  //   if (editFlag) {
  //     newList = userList.filter(item => item.id !== data.id).concat([data]);
  //   } else {
  //     newList = userList.concat([data]);
  //   }
  //   setUserList(newList);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const [name, username] = useState.form;
  //   const addRow = useState.props;

  //   const newUser = {
  //     name,
  //     username,
  //   };

  //   addRow(newUser);
  //   console.log('event');
  // };

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
    // setIsModalOpen(false);
  };

  // const onFinish = values => {
  //   form.resetFields();
  //   console.log('Success:', values);
  //   newUser([...values, newUser]);
  // };

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <Modal
      open={open}
      title="Create a new user: "
      onCancel={onCancel}
      footer={null}
      // userList={userList}
      setCurrentUser={setCurrentUser}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        // onSubmit={newUser}
        onSubmit={addUserHandler}
        user={currentUser}
        // onFinish={updateList}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // initialValues={{
        //   modifier: 'public',
        // }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input name:',
            },
          ]}
        >
          <Input type="textarea" value={name} />
        </Form.Item>
        <Form.Item name="username" label="Username">
          <Input type="textarea" value={username} />
        </Form.Item>
      </Form>
      <div className="submitbtn">
        <Button
          type="submit"
          htmlType="submit"
          onClick={() => {
            form
              .validateFields()
              .then(values => {
                form.resetFields();
                onCreate(values);
              })
              .catch(info => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Addd
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
export default App;
