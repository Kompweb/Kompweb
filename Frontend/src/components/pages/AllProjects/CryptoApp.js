import { Row, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CryptoApp = () => (
  <>
    {/* <Modal /> */}
    <div className="shop-container">
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Link to={'/'}>
          <Card
            hoverable
            // style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={require('../../../assets/crypto-wallet.png')}
              />
            }
          >
            <Meta title="Blockchain" description="" />
          </Card>
        </Link>
      </Row>
    </div>
  </>
);

export default CryptoApp;
