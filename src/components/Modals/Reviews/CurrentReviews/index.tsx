import AdPhoto from '../../../AdPhoto';
import Navigate from '../../../Navigate';
import ErrorMessage from '../../../ErrorMessage';
import Loader from '../../../Loader';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { ApiError } from '../../../../types/types';
import { parseReviewDate } from '../../../../lib/dateParse';
import { API_URL, SkyvitoService } from '../../../../services/skyvito.service';

import * as S from './style';

const CurrentReviews = () => {
  const [error, setError] = useState('');

  const { id } = useParams();

  const { data: response, isLoading } = useQuery(['reviews'], () => SkyvitoService.getReviews(id), {
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
      {isLoading && <Loader />}
      {response?.data.map((review) => (
        <S.ReviewContainer key={review.created_on}>
          <S.SellerAvatar>
            {review.author.avatar && (
              <AdPhoto
                src={`${API_URL}${review.author.avatar}` || '../img/no_photo.png'}
                width="40"
                height="40"
                isAvatar
              />
            )}
          </S.SellerAvatar>
          <S.ReviewInfoWrapper>
            <S.AuthorInfo>
              <S.AuthorName>{review.author.name}</S.AuthorName>
              <S.Date>{parseReviewDate(review.created_on)}</S.Date>
            </S.AuthorInfo>
            <S.ReviewTitle>Комментарий</S.ReviewTitle>
            <S.ReviewText>{review.text}</S.ReviewText>
          </S.ReviewInfoWrapper>
        </S.ReviewContainer>
      ))}
    </S.Container>
  );
};

export default CurrentReviews;
