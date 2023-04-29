import { isMobile } from 'react-device-detect';

import UIButton from '../../../components/UI/UIButton';
import AdPhoto from '../../../components/AdPhoto';
import SellerPhone from '../../../components/SellerPhone';
import UIModal from '../../../components/UI/UIModal/UIModal';
import Reviews from '../../../components/Modals/Reviews';
import EditAd from '../../../components/Modals/Ad/EditAd';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { API_URL, SkyvitoService } from '../../../services/skyvito.service';
import { ApiError, Images } from '../../../types/types';
import { dateParse, getAdCreateTime } from '../../../lib/dateParse';
import { getUserId } from '../../../store/selectors/authSelector';

import * as S from './style';

type Props = {
  title: string;
  description: string;
  city: string;
  ad_date: string;
  price: number;
  phone: string;
  seller_name: string;
  seller_date: string;
  seller_id: number;
  seller_avatar: string;
  img_urls: Images[];
};

const AdInfo = ({
  title,
  description,
  city,
  ad_date,
  price,
  phone,
  seller_name,
  seller_date,
  seller_id,
  seller_avatar,
  img_urls
}: Props) => {
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const push = useNavigate();
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = useSelector(getUserId);

  const { data: response } = useQuery('reviewsCount', () => SkyvitoService.getReviews(id));
  const { mutateAsync, isError, error } = useMutation('delete ad', (id: string | undefined) =>
    SkyvitoService.deleteAd(id)
  );

  const showReviewsHandler = () => {
    isMobile ? push(`/reviews/${id}`) : setIsReviewsModalOpen((prevState) => !prevState);
  };

  const showEditModalHandler = () => {
    isMobile ? push(`/edit-ad/${id}`) : setIsEditModalOpen((prevState) => !prevState);
  };

  const deleteAdHandler = () => {
    mutateAsync(id).then(() => {
      navigate('/');
    });
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.AdditionalInformation>
        <S.CityTimeText>{city}</S.CityTimeText>
        <S.CityTimeText>{getAdCreateTime(ad_date)}</S.CityTimeText>
        <S.Reviews onClick={showReviewsHandler}>{response?.data.length} отзыва</S.Reviews>
        <UIModal toggle={showReviewsHandler} open={isReviewsModalOpen}>
          <Reviews />
        </UIModal>
      </S.AdditionalInformation>
      <S.Price>{price} ₽</S.Price>
      {isError && <span>{(error as ApiError).message}</span>}
      {String(seller_id) === String(userId) ? (
        <S.EditButtonsWrapper>
          <UIButton buttonClassType="edit" text="Редактировать" onClick={showEditModalHandler} />
          <UIModal toggle={showEditModalHandler} open={isEditModalOpen}>
            <EditAd
              title={title}
              description={description}
              price={price}
              img_urls={img_urls}
              showEditAdForm={showEditModalHandler}
            />
          </UIModal>
          <UIButton buttonClassType="delete" text="Снять с публикации" onClick={deleteAdHandler} />
        </S.EditButtonsWrapper>
      ) : (
        <SellerPhone phone={phone} />
      )}
      <S.SellerBlock>
        <S.SellerAvatar>
          {seller_avatar !== null ? (
            <AdPhoto
              src={`${API_URL}${seller_avatar}` || './img/no_photo.png'}
              width="40"
              height="40"
              isAvatar
            />
          ) : (
            ''
          )}
        </S.SellerAvatar>
        <S.SellerInfo>
          <S.SellerName to={`/seller/${seller_id}`}>{seller_name}</S.SellerName>
          <S.SellerDate>{dateParse(seller_date)}</S.SellerDate>
        </S.SellerInfo>
      </S.SellerBlock>
    </S.Container>
  );
};

export default AdInfo;
