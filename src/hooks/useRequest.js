import React, {useState, useEffect} from 'react';
import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://192.168.100.139:3000'});

function useRequest() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    axiosInstance
      .get('/checklists')
      .then(res => setResponse(res.data))
      .catch(err => console.log(err));
  }, []);

  return {
    response,
  };
}

export default useRequest;
