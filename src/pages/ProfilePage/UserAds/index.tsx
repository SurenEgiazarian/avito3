import ErrorMessage from '../../../components/ErrorMessage';
import Navigate from '../../../components/Navigate';
import Ad from '../../../components/Ad';
import Loader from '../../../components/Loader';

import { useQuery } from 'react-query';
import { useState } from 'react';

import { API_URL, SkyvitoService } from '../../../services/skyvito.service';
import { ApiError } from '../../../types/types';

import * as S from './style';

const UserAds = () => {
  const [error, setError] = useState('');

  const {
    data: response,
    isLoading,
    isSuccess
  } = useQuery('user_ads', () => SkyvitoService.getUserAds(), {
    onError: (err: ApiError) => {
      setError(err.message);
    }
  });

  if (error) {
    return (
      <S.Container>
        <Navigate />
        <ErrorMessage>{error}</ErrorMessage>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Мои товары</S.Title>
      <S.Content>
        {isLoading && <Loader />}
        {response?.data.map(({ id, created_on, title, price, user, images }) => (
          <Ad
            key={created_on}
            created_on={created_on}
            title={title}
            price={price}
            city={user.city}
            img_src={images.length ? `${API_URL}${images[0].url}` : '../img/no_photo.png'}
            ad_id={id}
          />
        ))}
        {isSuccess && !response?.data.length && <ErrorMessage>Объявления не найдены</ErrorMessage>}
      </S.Content>
    </S.Container>
  );
};

export default UserAds;
