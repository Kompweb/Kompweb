import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
} from 'antd';

const { Option } = Select;

const App = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    console.log('New User Added');
  };

  return (
    <div className="drawer-app">
      <Button
        className="drawer-btn"
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Subscribe
      </Button>
      <Drawer
        title="Create a new account"
        width="100%"
        onClose={onClose}
        open={open}
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="user"
                label="User"
                rules={[
                  {
                    required: true,
                    message: 'Please select an user',
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="clark">Clark And</Option>
                  <Option value="gable">Gable</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="john">John and</Option>
                  <Option value="wayne">Wayne</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={trigger => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  {
                    required: true,
                    message: 'please enter message description',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter message description"
                />
              </Form.Item>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onSubmit} type="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};
export default App;
