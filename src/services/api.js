import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.0.28:3333', //localhost
  baseURL: 'http://54.207.205.158:3333', //aws service
});

export default api;
