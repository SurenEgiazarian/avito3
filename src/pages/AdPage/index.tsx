import { motion } from 'framer-motion';

import Navigate from '../../components/Navigate';
import AdPhotos from './AdPhotos';
import AdInfo from './AdInfo';
import AdDescription from './AdDescription';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';

import { ApiError } from '../../types/types';
import { SkyvitoService } from '../../services/skyvito.service';

import * as S from './style';

const AdPage = () => {
  const [error, setError] = useState('');

  const { id } = useParams();

  const { data: response, isLoading } = useQuery([`ad_${id}`, id], () => SkyvitoService.getAd(id), {
    onError: (err: ApiError) => {
      setError(err.message);
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
      <Navigate />
      {isLoading && <Loader />}
      {response?.data && (
        <S.ContentWrapper>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <S.Content>
              <AdPhotos photos={response.data.images} />
              <AdInfo
                title={response.data.title}
                description={response.data.description}
                city={response.data.user.city}
                ad_date={response.data.created_on}
                price={response.data.price}
                phone={response.data.user.phone || ''}
                seller_name={response.data.user.name}
                seller_date={response.data.user.sells_from}
                seller_id={response.data.user_id}
                seller_avatar={response.data.user.avatar}
                img_urls={response.data.images}
              />
            </S.Content>
          </motion.div>
          <AdDescription description={response.data.description} />
        </S.ContentWrapper>
      )}
    </S.Container>
  );
};

export default AdPage;
