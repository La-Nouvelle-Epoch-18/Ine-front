import { UserState } from './users/UserModel';

export interface RootState {
  version: string;
}

export interface ModuleState extends RootState {
  users: UserState;
}
