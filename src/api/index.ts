export * from './CommentsAPI';
export * from './KataAPI';
export * from './UsersAPI';
import axios, { InternalAxiosRequestConfig } from 'axios';

export const API_URL = 'https://rs-clone-server-qh63.onrender.com/api';
export const AUTH_URL = 'https://rs-clone-server-qh63.onrender.com/api/auth';

export const host = axios.create({
  baseURL: API_URL,
});

export const authHost = axios.create({
  baseURL: API_URL,
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);
