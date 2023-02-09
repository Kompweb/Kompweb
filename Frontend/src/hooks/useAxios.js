import { useState, useEffect } from 'react';

const useAxiosfunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async param => {
    const { axiosInstance, method, url, requestConfig = {} } = param;
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });
      console.log(res);
      setResponse(res.data);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('this is the controller', controller);
    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosfunction;

// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const useAxios = param => {
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

//   const fetchData = async param => {
//     try {
//       setLoading(true);
//       const result = await axios(param);
//       setResponse(result.data);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(param);
//   }, []);

//   return { response, loading, error };
// };

// export default useAxios;

// const [coin, setCoin] = useState([]);
// const [error, setError] = useState(null);

// useEffect(() => {
//   axios
//     .get(
//       'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=%24&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true'
//     )
//     .then(res => {
//       setCoin(res.data);
//       console.log(res.data);
//     })
//     .catch(error => setError(error));
// }, []);

// if (error) return `Error: ${error.message}`;
// if (!coin) return null;
