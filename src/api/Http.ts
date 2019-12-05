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

const myAxios = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    common: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin',
    },
  },
});

myAxios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    store.dispatch('users/logoutUser');
    window.location.replace(`/`);
  }
  return Promise.reject(error.response);
});

myAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});

export default myAxios;
