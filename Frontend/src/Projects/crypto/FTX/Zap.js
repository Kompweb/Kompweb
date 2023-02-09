// import React, { useState, useEffect } from 'react';
import '../../../styles/crypto.css';
// import axios from 'axios';
// import useAxios from '../../../hooks/useAxios';
import AxiosWith from '../../../hooks/AxiosWith';
// import CoinTrending from './CoinTrending';
// import { Axios } from 'axios';
// import CoinDetail from '../CoinDetail';

// const client = axios.create({
// const baseURL= 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true',
// });

const App = () => {
  // const { response } = useAxios('/coins/bitcoin');
  // console.log(response);

  return (
    <div>
      {/* <h3>Trending:</h3> */}
      {/* <p>{coin.name}</p> */}
      {/* {response &&
        response.coins.map(coin => {
          <CoinTrending key={coin.item.coin_id} coin={coin.item} />;
        })} */}
      <AxiosWith />
      {/* <h3>Name={response}</h3> */}
      {/* {setCoin.value}
      {setCoin.symbol} */}
    </div>
  );
};

export default App;

// <>
//   <CoinDetail />
//   <div className="coin-app" key={coin.id}>
//     <p className="coin-name">name={coin.name}</p>
//     <p className="coin-price"> price={coin.current_price}</p>
//     <p className="coin-symbol"> symbol={coin.symbol}</p>
//     <p> marketcap={coin.total_volume}</p>
//     <p> volume={coin.market_cap}</p>
//     <p> image={coin.image}</p>
//     <p> priceChange={coin.price_change_percentage_24h}</p>
//   </div>
// </>
