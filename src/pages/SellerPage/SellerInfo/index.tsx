import React from 'react';
import { isMobile } from 'react-device-detect';

import AdPhoto from '../../../components/AdPhoto';
import SellerPhone from '../../../components/SellerPhone';
import BackArrowIcon from '../../../components/Icons/BackArrowIcon';

import { API_URL } from '../../../services/skyvito.service';
import { dateParse } from '../../../lib/dateParse';

import { useNavigate } from 'react-router-dom';

import * as S from './style';

type Props = {
  name: string;
  lastname: string | undefined;
  avatar: string;
  city: string;
  date: string;
  phone: string;
};

const SellerInfo = ({ name, lastname, avatar, city, date, phone }: Props) => {
  const navigate = useNavigate();

  const onHistoryBackHandler = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.BackArrowWrapper onClick={onHistoryBackHandler}>
          <BackArrowIcon />
        </S.BackArrowWrapper>
        <S.Title>Профиль продавца</S.Title>
      </S.TitleWrapper>
      {!isMobile && <S.Title>Профиль продавца</S.Title>}
      <S.SellerBlock>
        <S.SellerAvatar>
          {avatar !== null ? (
            <AdPhoto
              src={`${API_URL}${avatar}` || '/img/no_photo.png'}
              width={isMobile ? '40' : '170'}
              height={isMobile ? '40' : '170'}
            />
          ) : (
            ''
          )}
        </S.SellerAvatar>
        <S.SellerInfoWrapper>
          <S.SellerInfo>
            <S.SellerName>
              {name} {lastname || ''}
            </S.SellerName>
            <S.CityText>{city}</S.CityText>
            <S.SellerDate>{dateParse(date)}</S.SellerDate>
          </S.SellerInfo>
          {!isMobile && <SellerPhone phone={phone} />}
        </S.SellerInfoWrapper>
        {isMobile && <SellerPhone phone={phone} />}
      </S.SellerBlock>
    </S.Container>
  );
};

export default SellerInfo;
