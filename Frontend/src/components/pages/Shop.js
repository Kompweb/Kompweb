import { Row, Card } from 'antd';
import React from 'react';
// import '../../styles/Shop.less';
import '../../styles/Shop.css';

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const { Meta } = Card;

const Shop = () => (
  <>
    <div className="shop-container">
      {/* <Divider orientation="center">Align Top</Divider> */}
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img alt="example" src={require('../../assets/ghiveci-1.png')} />
          }
        >
          <Meta title="eCommerce" description="www.GitHub.com" />
        </Card>
        <DemoBox value={280}>
          <a style={{ color: 'aqua' }}>more info</a>
        </DemoBox>
        {/* </Col> */}
      </Row>
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={require('../../assets/scribble-stadium.png')}
            />
          }
        >
          <Meta title="Game App" description="www.GitHub.com" />
        </Card>
        <DemoBox value={280}>
          <a style={{ color: 'aqua' }}>more info</a>
        </DemoBox>
        {/* <p>Description</p> */}
        {/* </Col> */}
      </Row>
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img alt="example" src={require('../../assets/crypto-sign.png')} />
          }
        >
          <Meta title="Crypto App" description="www.GitHub.com" />
        </Card>
        <DemoBox value={280}>
          <a style={{ color: 'aqua' }}>more info</a>
        </DemoBox>
        {/* <p>Description</p> */}
        {/* </Col> */}
      </Row>
    </div>
  </>
);

export default Shop;
