import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Icons/Logo';

import * as S from './style';

const Navigate = () => {
  return (
    <S.Container>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <S.NavigateLink to="/">Вернуться на главную</S.NavigateLink>
    </S.Container>
  );
};

export default Navigate;
