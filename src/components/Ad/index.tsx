import { isMobile } from 'react-device-detect';

import AdPhoto from '../AdPhoto';
import UIModal from '../UI/UIModal/UIModal';

import { useState } from 'react';
import { limitStr } from '../../lib/limitStr';

import { getAdCreateTime } from '../../lib/dateParse';

import * as S from './style';

type Props = {
  title: string;
  price: number;
  created_on: string;
  city: string;
  img_src: string;
  ad_id: number;
};

const Ad = ({ title, price, created_on, city, img_src, ad_id }: Props) => {
  const [isFullPhotoShow, setIsFullPhotoShow] = useState<boolean>(false);

  const showPhotoModalHandler = () => {
    if (isMobile) return;

    setIsFullPhotoShow((prevState) => !prevState);
  };

  return (
    <S.Container>
      <UIModal toggle={showPhotoModalHandler} open={isFullPhotoShow}>
        <AdPhoto src={img_src} width="600" height="600" />
      </UIModal>
      <S.ImageWrapper>
        <AdPhoto src={img_src} onClick={showPhotoModalHandler} alt={title} />
      </S.ImageWrapper>
      <S.DescriptionBlock>
        <S.TitleLink to={`/ad/${ad_id}`}>{limitStr(title)}</S.TitleLink>
        <S.Price>{price} ₽</S.Price>
        <S.CityTimeBlockWrapper>
          <S.CityTimeText>{city}</S.CityTimeText>
          <S.CityTimeText>{getAdCreateTime(created_on)}</S.CityTimeText>
        </S.CityTimeBlockWrapper>
      </S.DescriptionBlock>
    </S.Container>
  );
};

export default Ad;
