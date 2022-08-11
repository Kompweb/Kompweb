import React from 'react';
import '../../styles/crypto.css';
import Crypto from './AllProjects/Crypto';

export default function Blockchain() {
  return (
    <div className="blockchain">
      <h1>Axios API</h1>
      <p>to display blockchain currencies.</p>
      <Crypto />
    </div>
  );
}
