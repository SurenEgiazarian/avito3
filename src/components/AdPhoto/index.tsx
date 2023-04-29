import React, { useState } from 'react';

import Loader from '../Loader';

import * as S from './style';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  isAvatar?: boolean;
}

const AdPhoto = ({ src, isAvatar, ...props }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (src === null) setIsLoading(true);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <>
      {isAvatar ? (
        <S.Avatar
          src={src || './img/no_photo.png'}
          {...props}
          isShow={isLoading}
          onLoad={handleImageLoad}
        />
      ) : (
        <S.Image src={src} {...props} isShow={isLoading} onLoad={handleImageLoad} />
      )}
      <S.LoaderWrapper isShow={isLoading}>
        <Loader />
      </S.LoaderWrapper>
    </>
  );
};

export default AdPhoto;
