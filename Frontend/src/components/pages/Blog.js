import React from 'react';
import { BugOutlined } from '@ant-design/icons';
import LightOn from '../../features/LightOn';

function Blog() {
  return (
    <>
      <div
        style={{
          // backgroundColor: '#61dafb',
          borderRadius: '8px',
          // paddingBottom: '100px',
          // marginBottom: '100px',
        }}
      >
        <h1>BOG</h1>
        <BugOutlined
          style={{
            fontSize: 64,
            backgroundColor: '#61dafb',
            borderRadius: '8px',
            marginBottom: '200px',
          }}
        />
        <LightOn />
      </div>
    </>
  );
}

export default Blog;
