import React from 'react';
import '../../../styles/zyx.css';
import {
  Progress,
  Space,
  // Col,
  // Row,
  Statistic,
} from 'antd';
const { Countdown } = Statistic;
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const onFinish = () => {
  console.log('a new pulse has been sent!');
};

const App = () => (
  <div className="toring-app">
    {/* <h5 style={{ textAlign: 'center' }}>Accuracy </h5> */}
    <Progress
      percent={90.9}
      strokeColor={{
        '0%': '#61dafb',
        '100%': '#87d068',
      }}
    />
    <p style={{ textAlign: 'left' }}>Confidence:</p>
    <Progress
      percent={99.9}
      status="active"
      strokeColor={{
        from: '#ff6347',
        to: '#87d068',
      }}
    />

    <p style={{ textAlign: 'left' }}>Courage: </p>
    <Progress
      percent={50}
      status="active"
      strokeColor={{
        from: '#61dafb',
        to: '#87d068',
      }}
    />

    <p style={{ textAlign: 'left' }}>Risk:</p>
    <Progress
      percent={69.9}
      status="active"
      strokeColor={{
        from: '#61dafb',
        to: '#87d068',
      }}
    />
    <p style={{ textAlign: 'left' }}>Expectations:</p>

    {/* <Row>
      <Col */}
    {/* style=
    {{
      marginTop: 12,
      marginBottom: 12,
      backgroundColor: 'black',
      padding: 8,
      color: '#61dafb',
    }}
    > */}
    {/* <Countdown value={deadline} onFinish={onFinish} /> */}
    {/* </Col>
    </Row> */}
    <Space wrap>
      <Progress
        type="circle"
        percent={90}
        width={100}
        color={'#61dafb'}
        // marginTop={32}
        strokeColor={{
          '0%': '#61dafb',
          '100%': '#87d068',
        }}
      />
      <Progress
        type="circle"
        percent={100}
        width={100}
        strokeColor={{
          '0%': '#61dafb',
          '100%': '#87d068',
        }}
      />
    </Space>
    <Countdown
      style={{ marginTop: 40 }}
      // title="Countdown"
      value={Date.now() + 60 * 1000}
      onFinish={onFinish}
      // onChange={onChange}
    />
  </div>
);
export default App;
