import { PromiseInterface, userAxios, wrapper } from './Http';
import { LoginRequest, LoginResponse, RegisterRequest, User } from '@/stores/users/UserModel';

export const login = (data: LoginRequest):
Promise<PromiseInterface<LoginResponse>> => (
    wrapper(userAxios.post('/v1/auth/login', data))
);

export const verify = ():
Promise<PromiseInterface<boolean>> => (
    wrapper(userAxios.post('/v1/auth/verify'))
);

export const register = (data: RegisterRequest):
Promise<PromiseInterface<LoginResponse>> => (
    wrapper(userAxios.post('/v1/auth/signup', data))
);

export const getUser = ():
Promise<PromiseInterface<{ user: User }>> => (
    wrapper(userAxios.get('/v1/user'))
);

export const getUsers = (ids: Array<User['id']>):
Promise<PromiseInterface<{ users: User[] }>> => (
    wrapper(userAxios.get('/v1/user', { params: { ids }}))
);

export const getUsernames = (ids: Array<User['id']>):
Promise<PromiseInterface<{ users: User['username'] }>> => (
    wrapper(userAxios.get('/v1/usernames', { params: { ids }}))
);
