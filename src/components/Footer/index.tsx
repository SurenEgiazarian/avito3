import { Link } from 'react-router-dom';

import HomeIcon from '../Icons/HomeIcon';
import CreateAdIcon from '../Icons/CreateAdIcon';
import ProfileIcon from '../Icons/ProfileIcon';

import { useSelector } from 'react-redux';

import { getAuthStatus } from '../../store/selectors/authSelector';

import * as S from './style';

const Footer = () => {
  const isAuth = useSelector(getAuthStatus);

  return (
    <S.Container>
      <Link to={'/'}>
        <HomeIcon />
      </Link>

      {isAuth && (
        <Link to={'/create-ad'}>
          <CreateAdIcon />
        </Link>
      )}
      {isAuth ? (
        <Link to={'/profile'}>
          <ProfileIcon />
        </Link>
      ) : (
        <Link to={'/signin'}>
          <ProfileIcon />
        </Link>
      )}
    </S.Container>
  );
};

export default Footer;
