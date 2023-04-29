import axios from 'axios';
import Cookies from 'js-cookie';

import { useAppDispatch } from '../store/store';
import { useMutation } from 'react-query';
import { useEffect } from 'react';

import { RefreshToken } from '../types/types';
import { SkyvitoService } from '../services/skyvito.service';
import { signIn, signOut, writeUserId } from '../store/slices/authSlice';

export const useRefreshToken = () => {
  const dispatch = useAppDispatch();

  const { mutateAsync, data } = useMutation('refresh token', (data: RefreshToken) =>
    SkyvitoService.refreshToken(data)
  );

  const { mutateAsync: asyncWriteId } = useMutation('get user ID', () => SkyvitoService.getUser());

  useEffect(() => {
    const accessOldCookie = Cookies.get('access');
    const refreshOldCookie = Cookies.get('refresh');
    getNewToken(accessOldCookie, refreshOldCookie);

    setInterval(() => {
      const access = Cookies.get('access');
      const refresh = Cookies.get('refresh');

      getNewToken(access, refresh);
    }, 240000);
  }, []);

  const getNewToken = async (accessToken: string | undefined, refreshToken: string | undefined) => {
    if (accessToken && refreshToken) {
      const tokensFetch = await mutateAsync({
        access_token: accessToken,
        refresh_token: refreshToken
      });

      dispatch(
        signIn({
          token: tokensFetch.data.access_token
        })
      );

      axios.defaults.headers.common = { Authorization: `Bearer ${tokensFetch.data.access_token}` };
      Cookies.set('access', tokensFetch.data.access_token);
      Cookies.set('refresh', tokensFetch.data.refresh_token);

      const userData = await asyncWriteId();

      if (tokensFetch && userData) {
        dispatch(
          writeUserId({
            id: userData.data.id
          })
        );
      }
    } else {
      signOut();
      return;
    }
  };

  return data;
};
