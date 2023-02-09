import axios from 'axios';
import { useState, useEffect } from 'react';
// import { TrendingDown, TrendingUp } from '../icons/icons';
// import CurrencyFormat from '../utils/CurrencyFormat'
// import Vis from '../Projects/crypto/FTX/Vis';
import logo from '../assets/BitcoinLogo.png';
function App() {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&developer_data=false&sparkline=true'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => setError(error));
  }, []);

  if (error) return `Error here at line: ${error.message}`;
  if (!coins) return null;

  //   console.log(coins.market_data.price_change_percentage_24h);

  return (
    <>
      <div key={coins.id}>
        {/* <img src={coins.image.small}></img> */}
        <img src={logo} />
        <h3>{coins.name}</h3>
        {/* <p>{coins.symbol}</p> */}
        {/* <div
        //   className={`${
        //     coins.market_data.price_change_percentage_24h < 0
        //       ? 'text-red-400'
        //       : 'text-green-400'
        //   }`}
        >
          {coins.market_data.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          <br />
          <p>
            % price change 24h: {coins.market_data.price_change_percentage_24h}
          </p>
        </div> */}
        {/* <br /> */}
        {/* {coins.map(coin => (
          <div key={coins.id}>{coin.name}</div>
        ))} */}
        {/* <p>Links: {coins.links}</p> */}
        <p>Community Votes:</p>
        <p style={{ fontSize: 32 }}>
          <span style={{ color: '#11d811' }}>
            {coins.sentiment_votes_up_percentage}%
          </span>
          {' | '}
          <span style={{ color: 'tomato' }}>
            {coins.sentiment_votes_down_percentage}%
          </span>
        </p>
        {/* <p>${coins.market_data.current_price.usd}</p> */}
        {/* <p>Interest Score: {coins.public_interest_score}</p> */}
        {/* <p>Market Cap: {coins.market_data.market_cap.usd}</p> */}
        {/* <p>Total Volume: {coins.market_data.total_volume.usd}</p> */}
      </div>
      {/* <Vis /> */}
      {/* <hr /> */}
      {/* <p style={{ fontSize: 14, width: '90%' }}>{coins.description.en}</p> */}
      {/* <hr /> */}
    </>
  );
}

export default App;
