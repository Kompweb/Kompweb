import axios from '../api/CoinApi';
import useAxiosFunction from '../hooks/useAxios';
import { useEffect } from 'react';

const Coins = () => {
  const [coins, error, loading, axiosFetch] = useAxiosFunction();
  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/coins/list/',
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'POST',
      url: '/coins',
      requestConfig: {
        DATA: {
          coin_id: 3,
          title: 'Coins stuff',
          body: 'hook stuff',
        },
      },
    });
  };

  return (
    <article>
      <h2>myCoins</h2>
      <div>
        <button onClick={handleSubmit}> Submit </button>
        <button onClick={getData}> Reset </button>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMessage"> {error} </p>}
      {!loading && !error && coins?.lenght && (
        <ul>
          {coins.map((coins, id) => (
            <li key={id}>{`${coins.id}.${coins.name}`}</li>
          ))}
        </ul>
      )}
      {!loading &&
        !error &&
        coins?.lenght &&
        coins?.data(
          <p>
            {`
            userID: ${coins.data?.userId}, 
            title: ${coins.data?.name}, 
            body: ${coins.data?.body}`}
          </p>
        )}
      {!loading && !error && !coins && <p>No coins here</p>}
      {/* <button onClick={() => refetch}> Get Coin</button> */}
    </article>
  );
};

export default Coins;
