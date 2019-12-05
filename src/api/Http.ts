import axios from 'axios';
import store from '@/store';

export interface GenericError {
  message?: string;
  errors?: { [key: string]: string };
}

interface HttpError {
  status: number;
  data: GenericError;
}

interface HttpSuccess<S> {
  status: number;
  data: S;
}

export interface PromiseInterface<S> {
  success: S | null;
  error: GenericError | null;
  status?: number;
}

export const wrapper = <S>(promise: Promise<any>):
Promise<PromiseInterface<S>> => (
  promise
    .then(({ data, status }: HttpSuccess<S>) => ({ success: data, error: null, status }))
    .catch(({ data, status }: HttpError) => ({ success: null, error: data || {}, status }))
);

export const userAxios = axios.create({
  baseURL: process.env.VUE_USER_API,
  headers: {
    common: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin',
    },
  },
});

export const rssAxios = axios.create({
  baseURL: process.env.VUE_RSS_API,
  headers: {
    common: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin',
    },
  },
});

export const postAxios = axios.create({
  baseURL: process.env.VUE_POST_API,
  headers: {
    common: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin',
    },
  },
});

rssAxios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    store.dispatch('users/logoutUser');
    window.location.replace(`/`);
  }
  return Promise.reject(error.response);
});

rssAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});

postAxios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    store.dispatch('users/logoutUser');
    window.location.replace(`/`);
  }
  return Promise.reject(error.response);
});

postAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});

userAxios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    store.dispatch('users/logoutUser');
    window.location.replace(`/`);
  }
  return Promise.reject(error.response);
});

userAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});
