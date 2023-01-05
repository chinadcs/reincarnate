import axios from 'axios';
import { parseCookies } from 'nookies';

const api = axios.create({
  baseURL: `http://localhost:3333`
});

api.interceptors.request.use(config => {
  const { ['reincarnate.jwt']: token } = parseCookies();
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
