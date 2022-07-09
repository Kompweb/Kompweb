import { Row, Card } from 'antd';
import React from 'react';
// import ModalPop from '../../common/Modal';

const { Meta } = Card;
// const onMenuClick = e => {
//   console.log('click', e);
// };
const PotShop = () => (
  <>
    {/* <ModalPop /> */}
    <div className="shop-container">
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Card
          hoverable
          style={{ width: 280 }}
          cover={
            <img alt="example" src={require('../../../assets/ghiveci-1.png')} />
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
  </>
);

export default PotShop;
