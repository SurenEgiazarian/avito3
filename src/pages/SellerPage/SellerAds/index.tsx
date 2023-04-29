import Navigate from '../../../components/Navigate';
import Loader from '../../../components/Loader';
import ErrorMessage from '../../../components/ErrorMessage';
import Ad from '../../../components/Ad';

import { useQuery } from 'react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ApiError } from '../../../types/types';
import { API_URL, SkyvitoService } from '../../../services/skyvito.service';

import * as S from './style';

const SellerAds = () => {
  const [error, setError] = useState('');

  const { id } = useParams();

  const {
    data: response,
    isLoading,
    isSuccess
  } = useQuery(['ads', id], () => SkyvitoService.getAllAds(), {
    onError: (err: ApiError) => {
      setError(err.message);
    },
    select: ({ data }) => {
      return data.filter((ad) => String(ad.user_id) === id);
    },
    enabled: !!id
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
      <S.Title>Товары продавца</S.Title>
      <S.AdsWrapper>
        {isLoading && <Loader />}
        {response?.map(({ id, created_on, title, price, user, images }) => (
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
        {isSuccess && !response?.length && <S.Message>Объявления не найдены</S.Message>}
      </S.AdsWrapper>
    </S.Container>
  );
};

export default SellerAds;
