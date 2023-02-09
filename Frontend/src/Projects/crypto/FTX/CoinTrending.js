import { Link } from 'react-router-dom';
import { currencyFormat } from '../../../utils/CurrencyFormat';

const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/ftx/${coin.id}`}>
      <div>
        <div>
          <span>{coin.name}</span>
          <img src={coin.small} alt={coin.name} />
          <p>{coin.name}</p>
          <span>{currencyFormat(coin.market_cap)}</span>
          <small>({coin.symbol})</small>
        </div>
      </div>
    </Link>
  );
};

export default CoinTrending;

// import React from 'react';

// function CoinTrending({ coin }) {
//   console.log('my coin', coin);
//   return (
//     <>
//       <div>coin={coin.name}</div>
//     </>
//   );
// }

// export default CoinTrending;
