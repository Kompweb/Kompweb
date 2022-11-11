import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { users } from './features/liszt';

const CollectionCreateForm = ({
  open,
  onCreate,
  onCancel,
  // onChange,
  // fields,
}) => {
  const [form] = Form.useForm();
  const [name, username] = useState([users]);

  const newUser = userInfo => {
    username([...name, userInfo]);
  };
  // console.log(newUser);

  return (
    <Modal
      open={open}
      title="Create A New User:"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      newUser={newUser}
      onOk={() => {
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
      <Form
        form={form}
        layout="vertical"
        labelCol={{ span: 6 }}
        name="form_in_modal"
        onSubmit={newUser}
        // fields={fields}
        // onFieldsChange={(_, allFields) => {
        //   onChange(allFields);
        // }}
      >
        <Form.Item
          name="name"
          label="Name"
          // values={''}
          rules={[
            {
              required: true,
              message: 'Name! is required',
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          // values={''}
          rules={[
            {
              required: true,
              message: 'A Username! is required',
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);
  // const [fields, setFields] = useState();

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
        Add User
      </Button>
      <div>
        <CollectionCreateForm
          open={open}
          onCreate={onCreate}
          onCancel={() => {
            setOpen(false);
          }}
          // fields={fields}
          // onChange={newFields => {
          //   setFields(newFields);
          // }}
        />
      </div>
    </>
  );
};
export default App;
