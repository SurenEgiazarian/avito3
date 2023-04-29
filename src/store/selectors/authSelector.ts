import { RootState } from '../store';

export const getAuthStatus = (state: RootState) => state.auth.isAuth;

export const getUserId = (state: RootState) => state.auth.id;
