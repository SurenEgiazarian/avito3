import React from 'react';
import { isMobile } from 'react-device-detect';

import AdPhoto from '../../../components/AdPhoto';

import { useMutation, useQueryClient } from 'react-query';

import { API_URL, SkyvitoService } from '../../../services/skyvito.service';
import { ApiError } from '../../../types/types';

import * as S from './style';

type Props = {
  avatar_url: string;
};

const ProfileAvatar = ({ avatar_url }: Props) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, error } = useMutation(
    'edit avatar',
    (data: FormData) => SkyvitoService.editAvatar(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('current user');
      }
    }
  );

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (e.target.files) {
      formData.append('file', e.target.files[0]);
      await mutateAsync(formData);
    }

    if (isError) {
      console.log(error);
    }
  };

  return (
    <S.AvatarForm>
      {avatar_url ? (
        <S.AvatarWrapper>
          <AdPhoto
            src={`${API_URL}${avatar_url}`}
            width={isMobile ? '132' : '170'}
            height={isMobile ? '132' : '170'}
            isAvatar
          />
        </S.AvatarWrapper>
      ) : (
        <S.AvatarSkeleton />
      )}
      <S.AvatarEdit
        id="avatar"
        name="avatar"
        type="file"
        accept="image/jpeg,image/png,image/jpg"
        onChange={onChange}
      />
      <S.AvatarLabel htmlFor="avatar">Заменить</S.AvatarLabel>
      {isError && <span>{(error as ApiError).message}</span>}
    </S.AvatarForm>
  );
};

export default ProfileAvatar;
