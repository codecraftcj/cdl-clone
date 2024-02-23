// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://34.134.142.147/',
  // Add other configurations if needed
});

export default instance;
