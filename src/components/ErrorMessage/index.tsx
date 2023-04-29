import React from 'react';

import * as S from './style';

type Props = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: Props) => {
  return <S.Message>{children}</S.Message>;
};

export default ErrorMessage;
