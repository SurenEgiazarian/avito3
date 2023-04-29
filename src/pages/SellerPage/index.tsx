import Navigate from '../../components/Navigate';
import SellerInfo from './SellerInfo';
import SellerAds from './SellerAds';
import Loader from '../../components/Loader';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { SkyvitoService } from '../../services/skyvito.service';
import { ApiError } from '../../types/types';

import * as S from './style';

const SellerPage = () => {
  const [error, setError] = useState('');

  const { id } = useParams();

  const { data: response, isLoading } = useQuery(
    ['users', id],
    () => SkyvitoService.getAllUsers(),
    {
      onError: (err: ApiError) => {
        setError(err.message);
      },
      select: ({ data }) => {
        const currentSeller = data.filter((user) => String(user.id) === id);
        return { ...currentSeller[0] };
      },
      enabled: !!id
    }
  );

  if (error) {
    return (
      <S.Container>
        <Navigate />
        <S.Message>{error}</S.Message>
      </S.Container>
    );
  }

  return (
    <S.Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <S.Container>
        <Navigate />
        {isLoading && <Loader />}
        {response && (
          <SellerInfo
            name={response.name}
            lastname={response.surname}
            avatar={response.avatar}
            date={response.sells_from}
            city={response.city}
            phone={response.phone}
          />
        )}
        <SellerAds />
      </S.Container>
    </S.Motion>
  );
};

export default SellerPage;
