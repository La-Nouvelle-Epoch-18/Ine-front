import { UserState } from './UserModel';
import { GetterTree } from 'vuex';
import { ModuleState } from '../RootModel';


export const isConnected = (state: UserState): boolean =>
  state.user !== null;

export const getters: GetterTree<UserState, ModuleState> = {
  isConnected,
};
