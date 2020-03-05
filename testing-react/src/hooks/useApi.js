import { useState } from 'react';
import axios from 'axios';

const useApi = (url, options) => {
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(url, options);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    response,
    fetchData,
    reset: () => setResponse(null),
  };
};

export default useApi;
