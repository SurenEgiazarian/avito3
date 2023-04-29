import { NavLink, useNavigate } from 'react-router-dom';

import MobileLogo from '../../../components/Icons/MobileLogo';

import React, { useState } from 'react';

import * as S from './style';

const MobileSearch = () => {
  const navigate = useNavigate();

  const [adName, setAdName] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdName(e.target.value);
  };

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      search: `?search=${adName}`
    });
  };

  return (
    <S.SearchContainer>
      <S.Wrapper onSubmit={handleSubmitSearch}>
        <NavLink to="/">
          <MobileLogo />
        </NavLink>
        <S.SearchInput type="text" placeholder="Поиск" onChange={handleSearchChange} />
      </S.Wrapper>
    </S.SearchContainer>
  );
};

export default MobileSearch;
