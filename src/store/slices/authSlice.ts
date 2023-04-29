import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const access = Cookies.get('access');
const refresh = Cookies.get('refresh');

type Props = {
  isAuth: boolean;
  token: string;
  id: string;
};

const initialState: Props = {
  isAuth: !!(access && refresh),
  token: '',
  id: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
    },
    writeUserId: (state, action) => {
      state.id = action.payload.id;
    },
    signOut: (state) => {
      state.isAuth = false;
      Cookies.remove('access');
      Cookies.remove('refresh');
    }
  }
});

export const { signIn, signOut, writeUserId } = authSlice.actions;
