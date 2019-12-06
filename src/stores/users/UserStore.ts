import { UserState } from './UserModel';
import { ModuleState } from '../RootModel';
import { Module } from 'vuex';
import { actions } from './UserAction';
import { mutations } from './UserMutation';

const state: UserState = {
  user: null,
  error: null,
};

export const UserStore: Module<UserState, ModuleState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};
