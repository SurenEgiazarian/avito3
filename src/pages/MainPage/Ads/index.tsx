import * as S from './style';
import Ad from '../../../components/Ad';
import { useQuery } from 'react-query';
import { API_URL, SkyvitoService } from '../../../services/skyvito.service';
import { ApiError } from '../../../types/types';
import Loader from '../../../components/Loader';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Ads = () => {
  const [error, setError] = useState('');

  const [params] = useSearchParams();
  const searchName = params.get('search')?.toLowerCase().trim();

  const {
    data: response,
    isLoading,
    isSuccess
  } = useQuery('ads', () => SkyvitoService.getAllAds(), {
    onError: (err: ApiError) => {
      setError(err.message);
    }
  });

  return (
    <S.AdsContainer>
      <S.Title>Объявления</S.Title>
      <S.Content>
        {isLoading && (
          <S.LoaderWrapper>
            <Loader />
          </S.LoaderWrapper>
        )}
        {error && <S.Message>{error}</S.Message>}
        {response?.data
          .filter(({ title }) => title.toLowerCase().includes((searchName as string) || ''))
          .map(({ id, created_on, title, price, user, images }) => (
            <Ad
              key={created_on}
              created_on={created_on}
              title={title}
              price={price}
              city={user.city}
              img_src={images.length ? `${API_URL}${images[0].url}` : './img/no_photo.png'}
              ad_id={id}
            />
          ))}
        {isSuccess && !response?.data.length && <S.Message>Объявления не найдены</S.Message>}
      </S.Content>
    </S.AdsContainer>
  );
};

export default Ads;
