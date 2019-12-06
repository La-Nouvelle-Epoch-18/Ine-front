import { UserState, LoginResponse } from './UserModel';
import { MutationTree } from 'vuex';
import * as types from '@/stores/mutation-types';
import { GenericError } from '@/api/Http';

export const mutations: MutationTree<UserState> = {
  [types.LOGIN_REQUEST_SUCCESS](state, data: LoginResponse) {
    state.user = data.user;
    state.error = null;
  },

  [types.LOGIN_REQUEST_ERROR](state, data: GenericError) {
    state.user = null;
    state.error = data;
  },

  [types.REGISTER_REQUEST_SUCCESS](state, data: LoginResponse) {
    state.user = data.user;
    state.error = null;
  },

  [types.REGISTER_REQUEST_ERROR](state, data: GenericError) {
    state.user = null;
    state.error = data;
  },
};

