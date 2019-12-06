import { LoginRequest, LoginResponse, UserState, RegisterRequest } from './UserModel';
import { PromiseInterface } from '@/api/Http';
import { login, register } from '@/api/UserApi';
import { ActionContext, ActionTree } from 'vuex';
import { ModuleState } from '../RootModel';
import * as types from '@/stores/mutation-types';

export const loginUser = async (
  { commit }: ActionContext<UserState, ModuleState>,
  data: LoginRequest): Promise<PromiseInterface<LoginResponse>> => {
  const { success, error } = await login(data);
  if (success) {
    localStorage.setItem('token', success.token);
    commit(types.LOGIN_REQUEST_SUCCESS, success);
  } else {
    commit(types.LOGIN_REQUEST_ERROR, error);
  }
  return { success, error };
};

export const registerUser = async (
  { commit }: ActionContext<UserState, ModuleState>,
  data: RegisterRequest): Promise<PromiseInterface<LoginResponse>> => {
  const { success, error } = await register(data);
  if (success) {
    localStorage.setItem('token', success.token);
    commit(types.REGISTER_REQUEST_SUCCESS, success);
  } else {
    commit(types.REGISTER_REQUEST_ERROR, error);
  }
  return { success, error };
};

export const actions: ActionTree<UserState, ModuleState> = {
  loginUser,
  registerUser,
};
