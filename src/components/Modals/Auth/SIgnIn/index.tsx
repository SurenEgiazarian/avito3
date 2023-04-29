import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';

import FullLogo from '../../../Icons/FullLogo';
import UIButton from '../../../UI/UIButton';
import { Formik } from 'formik';

import { useMutation } from 'react-query';

import { signInSchema } from '../../../../schemas';
import { SignInError, SignInProps } from '../../../../types/types';
import { SkyvitoService } from '../../../../services/skyvito.service';
import { useAppDispatch } from '../../../../store/store';
import { signIn, writeUserId } from '../../../../store/slices/authSlice';

import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import * as S from '../style';

type Props = {
  showSignUpForm?: () => void;
  showSignInForm?: () => void;
};

type Values = {
  email: string;
  password: string;
};

const SignIn = ({ showSignUpForm, showSignInForm }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutateAsync, isError, error, isLoading } = useMutation(
    'signIn',
    (data: SignInProps) => SkyvitoService.signIn(data),
    {
      onSuccess: () => {
        navigate('/');
      }
    }
  );

  const { mutateAsync: asyncWriteId } = useMutation('get user ID', () => SkyvitoService.getUser());

  const submitHandler = async (values: Values) => {
    const credentials: SignInProps = {
      email: values.email,
      password: values.password
    };

    const { data } = await mutateAsync(credentials);

    if (data) {
      dispatch(
        signIn({
          token: data.access_token
        })
      );

      Cookies.set('access', data.access_token);
      Cookies.set('refresh', data.refresh_token);

      axios.defaults.headers.common = { Authorization: `Bearer ${data.access_token}` };

      const userData = await asyncWriteId();

      if (userData) {
        dispatch(
          writeUserId({
            id: userData.data.id
          })
        );

        if (showSignInForm && !isMobile) {
          showSignInForm();
        }
        if (showSignInForm && !isMobile) {
          showSignInForm();
        }
      }
    }

    if (isError) {
      console.log(error);
    }
  };

  const navigateHandler = () => {
    navigate('/signup');
  };

  return (
    <S.Container>
      <FullLogo />
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={signInSchema}
        onSubmit={async (values: Values) => {
          await submitHandler(values);
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isValid }) => (
          <S.AuthForm>
            <S.AuthField
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <S.ErrorFieldEmail>{errors.email}</S.ErrorFieldEmail>}
            <S.AuthField
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <S.ErrorFieldPassword>{errors.password}</S.ErrorFieldPassword>
            )}
            {isError && (
              <S.ErrorSignInFromServerField>
                {(error as SignInError).response.data.detail}
              </S.ErrorSignInFromServerField>
            )}
            <UIButton
              buttonClassType="signIn"
              text={isLoading ? 'Вход...' : 'Войти'}
              type="submit"
              disabled={!isValid || isLoading}
              onClick={handleSubmit}
            />
          </S.AuthForm>
        )}
      </Formik>
      <UIButton
        buttonClassType="signUp"
        text="Зарегистрироваться"
        onClick={isMobile ? navigateHandler : showSignUpForm}
      />
    </S.Container>
  );
};

export default SignIn;
