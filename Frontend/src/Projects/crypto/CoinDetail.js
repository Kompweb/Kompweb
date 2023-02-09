import React from 'react';
import '../../styles/coin.css';

const CoinDetail = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <img src={image} alt="crypto" />
        <div className="coin-data">
          <h5 className="coin-name">{name}</h5>
          <p className="coin-symbol">{symbol}</p>
          <p className="coin-price">${price.toLocaleString()}</p>
          <p className="coin-volume">Vol: {volume?.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange?.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange?.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
