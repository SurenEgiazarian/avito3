import { isMobile } from 'react-device-detect';

import UIButton from '../UI/UIButton';
import UIModal from '../UI/UIModal/UIModal';
import SignIn from '../Modals/Auth/SIgnIn';
import SignUp from '../Modals/Auth/SignUp';
import NewAd from '../Modals/Ad/NewAd';
import MobileSearch from '../../pages/MainPage/MobileSearch';
import MobileLogo from '../Icons/MobileLogo';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getAuthStatus } from '../../store/selectors/authSelector';

import * as S from './style';

const Header = () => {
  useRefreshToken();

  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [isCreateAdFormOpen, setCreateAdFormOpen] = useState(false);

  const isAuth = useSelector(getAuthStatus);

  useEffect(() => {
    if (isAuth) {
      setIsSignInFormOpen(false);
    }
  }, [isAuth]);

  const showSignInFormHandler = () => {
    isMobile ? navigate('/signin') : setIsSignInFormOpen((prevState) => !prevState);
  };

  const showSignUpFormHandler = () => {
    setIsSignInFormOpen(false);
    setRegistrationFormOpen((prevState) => !prevState);
  };

  const showSignUpPageHandler = () => {
    isMobile ? navigate('/signup') : showSignUpFormHandler();
  };

  const showCreateAdFormHandler = () => {
    setCreateAdFormOpen((prevState) => !prevState);
  };

  return (
    <S.Header>
      <S.Wrapper>
        <S.MobileControls>{currentPath === '/' && <MobileSearch />}</S.MobileControls>
        {isMobile && currentPath !== '/' && (
          <Link to={'/'}>
            <MobileLogo />
          </Link>
        )}
        <S.ButtonsWrapper>
          {isAuth ? (
            <S.HeaderButtons>
              <UIButton
                buttonClassType="placement"
                text="Разметить объявление"
                onClick={showCreateAdFormHandler}
              />
              <S.ProfileLink to="/profile">Личный кабинет</S.ProfileLink>
            </S.HeaderButtons>
          ) : (
            <UIButton
              buttonClassType="auth"
              text="Вход в личный кабинет"
              onClick={showSignInFormHandler}
            />
          )}
        </S.ButtonsWrapper>
        <UIModal toggle={showSignInFormHandler} open={isSignInFormOpen}>
          <SignIn showSignUpForm={showSignUpPageHandler} showSignInForm={showSignInFormHandler} />
        </UIModal>
        <UIModal toggle={showSignUpPageHandler} open={isRegistrationFormOpen}>
          <SignUp showSignUpForm={showSignUpPageHandler} />
        </UIModal>
        <UIModal toggle={showCreateAdFormHandler} open={isCreateAdFormOpen}>
          <NewAd showCreateAdForm={showCreateAdFormHandler} />
        </UIModal>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
