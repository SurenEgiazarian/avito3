import { isMobile } from 'react-device-detect';

import Logo from '../../../components/Icons/Logo';
import UIButton from '../../../components/UI/UIButton';

import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import * as S from './style';

const Search = () => {
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
      {isMobile ? (
        <NavLink to="/">
          <Logo />
        </NavLink>
      ) : (
        <NavLink to="/">
          <Logo />
        </NavLink>
      )}
      <S.Wrapper onSubmit={handleSubmitSearch}>
        <S.SearchInput
          type="text"
          placeholder="Поиск по объявлениям"
          onChange={handleSearchChange}
        />
        <UIButton buttonClassType="search" text="Найти" />
      </S.Wrapper>
    </S.SearchContainer>
  );
};

export default Search;
