import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import AdPhoto from '../../../components/AdPhoto';
import UIModal from '../../../components/UI/UIModal/UIModal';
import BackArrowIcon from '../../../components/Icons/BackArrowIcon';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Images } from '../../../types/types';

import { API_URL } from '../../../services/skyvito.service';

import * as S from './style';

type Props = {
  photos: Images[];
};

const AdPhotos = ({ photos }: Props) => {
  const navigate = useNavigate();

  const [mainPhotoSrc, setMainPhotoSrc] = useState(
    `${API_URL}${photos[0]?.url}` || '/img/no_photo.png'
  );
  const [isFullPhotoShow, setIsFullPhotoShow] = useState<boolean>(false);

  const showPhotoModalHandler = () => {
    setIsFullPhotoShow((prevState) => !prevState);
  };

  const changePhotoHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    const { target } = e;

    setMainPhotoSrc((target as HTMLImageElement).src);
  };

  const onHistoryBackHandler = () => {
    navigate(-1);
  };

  return (
    <S.PhotosContainer>
      <S.SliderWrapper>
        <S.BackArrowWrapper onClick={onHistoryBackHandler}>
          <BackArrowIcon />
        </S.BackArrowWrapper>
        {photos.length !== 0 && (
          <Carousel showArrows={false}>
            {photos.map((photo) => (
              <div key={photo.url}>
                <img src={`${API_URL}${photo.url}`} width="320" height="320" alt="Фото товара" />
              </div>
            ))}
          </Carousel>
        )}
      </S.SliderWrapper>
      <S.PhotoWrapper>
        <UIModal toggle={showPhotoModalHandler} open={isFullPhotoShow}>
          <AdPhoto src={mainPhotoSrc} width="600" height="600" />
        </UIModal>
        <AdPhoto
          src={photos.length ? mainPhotoSrc : '/img/no_photo.png'}
          width="480"
          height="480"
          onClick={showPhotoModalHandler}
        />
      </S.PhotoWrapper>
      <S.PreviewPhotosContainer>
        {photos.length
          ? photos.map(({ url }) => (
              <AdPhoto
                key={url}
                src={`${API_URL}${url}`}
                width="88"
                height="88"
                onClick={changePhotoHandler}
              />
            ))
          : ''}
      </S.PreviewPhotosContainer>
    </S.PhotosContainer>
  );
};

export default AdPhotos;
