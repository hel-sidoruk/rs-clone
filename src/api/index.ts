export * from './CommentsAPI';
export * from './KataAPI';
export * from './UsersAPI';
import axios, { InternalAxiosRequestConfig } from 'axios';

export const API_URL = 'https://165.227.165.30:5000/api';
export const AUTH_URL = 'https://165.227.165.30:5000/api/auth';

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
