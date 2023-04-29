import React from 'react';
import { Formik } from 'formik';

import UIButton from '../../../components/UI/UIButton';

import { useMutation, useQueryClient } from 'react-query';
import { useAppDispatch } from '../../../store/store';

import { EditUser } from '../../../types/types';
import { SkyvitoService } from '../../../services/skyvito.service';
import { EditProfileSchema } from '../../../schemas';
import { signOut } from '../../../store/slices/authSlice';

import * as S from './style';

type Props = {
  name: string | undefined;
  surname: string | undefined;
  city: string | undefined;
  phone: string;
};

const ProfileForm = ({ name, surname, city, phone }: Props) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutateAsync, isLoading } = useMutation(
    'edit user',
    (data: EditUser) => SkyvitoService.editUser(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('current user');
      }
    }
  );

  const onSubmitHandler = async (values: EditUser) => {
    await mutateAsync(values);
  };

  const onSignOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <Formik
      initialValues={{
        name: name,
        surname: surname,
        city: city,
        phone: phone
      }}
      validationSchema={EditProfileSchema}
      onSubmit={async (values: Props) => {
        await onSubmitHandler(values);
      }}
    >
      {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isValid }) => (
        <S.EditForm>
          <S.Controls>
            {errors.name && touched.name && <S.ErrorFieldName>{errors.name}</S.ErrorFieldName>}
            <S.SmallInput
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></S.SmallInput>
            <S.SmallLabel htmlFor="name">Имя</S.SmallLabel>
          </S.Controls>
          <S.Controls>
            <S.SmallInput
              type="text"
              id="surname"
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
            ></S.SmallInput>
            <S.SmallLabel htmlFor="lastname">Фамилия</S.SmallLabel>
          </S.Controls>
          <S.Controls>
            <S.SmallInput
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            ></S.SmallInput>
            <S.SmallLabel htmlFor="city">Город</S.SmallLabel>
          </S.Controls>
          <S.LargeControls>
            <S.LargeInput
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            ></S.LargeInput>
            <S.LargeLabel htmlFor="phone">Телефон</S.LargeLabel>
          </S.LargeControls>
          <UIButton
            buttonClassType="save"
            text={isLoading ? 'Обновление' : 'Сохранить'}
            type="submit"
            disabled={!isValid || isLoading}
            onClick={handleSubmit}
          />
          <UIButton buttonClassType="save" text="Выйти" type="button" onClick={onSignOutHandler} />
        </S.EditForm>
      )}
    </Formik>
  );
};

export default ProfileForm;
