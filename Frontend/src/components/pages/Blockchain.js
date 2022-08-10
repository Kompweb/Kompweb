import React from 'react';
import '../../styles/crypto.css';
import Crypto from './AllProjects/Crypto';

export default function Blockchain() {
  return (
    <div className="blockchain">
      <h1>CoinGeico API using Axios</h1>
      <p>A simple API to display blockchain currencies.</p>
      <Crypto />
    </div>
  );
}
