import React from 'react';
import Crypto from './Crypto';
import ZYX from './FTX';

export default function Blockchain() {
  return (
    <>
      <div
        style={{
          padding: '0px 10px',
          // position: 'fixed',
          // color: 'red',
          // border: 2,
        }}
      >
        <ZYX />
        <div className="blockchain">
          <h1>Axios API</h1>
          <p>to display blockchain currencies</p>
          <Crypto />
        </div>
      </div>
    </>
  );
}
