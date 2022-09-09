import { Row, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Shop = () => (
  <>
    {/* <Modal /> */}
    <div className="shop-container">
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Link to={'/blockchain'}>
          <Card
            hoverable
            // style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={require('../src/assets/crypto-wallet.png')}
              />
            }
          >
            <Meta title="Blockchain" description="" />
          </Card>
        </Link>
      </Row>
    </div>
    <div className="shop-container">
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img alt="example" src={require('../src/assets/ghiveci-1.png')} />
          }
        >
          <Meta title="e-Commerce" description="" />
        </Card>
        {/* <DemoBox value={280}> */}
        {/* <a style={{}}>more info</a> */}
        {/* </DemoBox> */}
        {/* </Col> */}
      </Row>
    </div>
    <div className="shop-container">
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={require('../src/assets/scribble-stadium_987365.png')}
            />
          }
        >
          <Meta title="Game App" description="" />
        </Card>
        {/* <DemoBox value={280}><a style={{}}>more info</a></DemoBox> */}
        {/* <p>Description</p> */}
        {/* </Col> */}
      </Row>
    </div>
  </>
);

export default Shop;
