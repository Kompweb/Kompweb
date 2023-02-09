import React from 'react';
import '../../../styles/zyx.css';

import {
  // Avatar,
  // Image,
  List,
  Space,
  Card,
  Col,
  Row,
  Statistic,
} from 'antd';

import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  // AntDesignOutlined,
} from '@ant-design/icons';

// const data = Array.from({
//   length: 3,
// }).map((_, i) => ({
//   href: 'http://kompweb.com',
//   title: `Page ${i}`,
//   avatar: 'https://joeschmoe.io/api/v1/random',
//   description: 'A simple application for your investment options',
//   content:
//     'We supply a series of AI principles and practical patterns connected with high quality algebric algorithmically resources to help people manage their investments efficiently.',
// }));

import Data from './Data';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App = () => (
  <List
    style={{ marginBottom: 60 }}
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 1,
    }}
    dataSource={Data}
    footer={
      <>
        <div className="card-app">
          <Row gutter={6}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Active Users"
                  value={728}
                  precision={2}
                  valueStyle={{
                    color: 'green',
                  }}
                  prefix={<ArrowUpOutlined />}
                  // suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Idle"
                  value={56.3}
                  precision={2}
                  valueStyle={{
                    color: 'tomato',
                  }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        style={{ backgroundColor: 'white', padding: 20 }}
        actions={[
          <IconText
            icon={StarOutlined}
            text="126"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={LikeOutlined}
            text="126"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
            key="list-vertical-message"
          />,
        ]}
        extra={
          <img
            width={140}
            alt="logo"
            src={require('../../../assets/crypto-wallet.png')}
          />
        }
      >
        <List.Item.Meta
          // avatar={
          //   <Avatar
          //   // src="https://joeschmoe.io/api/v1/random"
          //   // icon={<AntDesignOutlined />}

          //   // src={
          //   //   <Image
          //   //     // src="https://joeschmoe.io/api/v1/random"
          //   //     style={{
          //   //       width: 32,
          //   //     }}
          //   //   />
          //   // }
          //   />
          // }
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default App;
