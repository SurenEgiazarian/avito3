import Navigate from '../../components/Navigate';
import ProfileForm from './ProfileForm';
import ProfileAvatar from './ProfileAvatar';
import UserAds from './UserAds';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';

import { useState } from 'react';
import { useQuery } from 'react-query';

import { SkyvitoService } from '../../services/skyvito.service';
import { ApiError } from '../../types/types';

import * as S from './style';

const ProfilePage = () => {
  const [error, setError] = useState('');

  const { data: response, isLoading } = useQuery('current user', () => SkyvitoService.getUser(), {
    onError: (err: ApiError) => {
      setError(err.message);
    }
  });

  if (error) {
    return (
      <S.Container>
        <Navigate />
        <ErrorMessage>{error}</ErrorMessage>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Navigate />
      {isLoading && <Loader />}
      {response?.data && (
        <S.Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <S.ProfileContainer>
            <S.Title>Здравствуйте, {response.data.name}</S.Title>
            <S.FormContent>
              <S.FormTitle>Настройки профиля</S.FormTitle>
              <S.FormWrapper>
                <ProfileAvatar avatar_url={response.data.avatar} />
                <ProfileForm
                  name={response.data.name}
                  surname={response.data.surname}
                  city={response.data.city}
                  phone={response.data.phone}
                />
              </S.FormWrapper>
            </S.FormContent>
            <UserAds />
          </S.ProfileContainer>
        </S.Motion>
      )}
    </S.Container>
  );
};

export default ProfilePage;
