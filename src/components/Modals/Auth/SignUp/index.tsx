import Cookies from 'js-cookie';
import axios from 'axios';
import React from 'react';
import { Formik } from 'formik';

import FullLogo from '../../../Icons/FullLogo';
import UIButton from '../../../UI/UIButton';

import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { signUpSchema } from '../../../../schemas';
import { SkyvitoService } from '../../../../services/skyvito.service';
import { ApiError, NewUser, SignInProps } from '../../../../types/types';
import { useAppDispatch } from '../../../../store/store';
import { signIn, writeUserId } from '../../../../store/slices/authSlice';

import * as S from '../style';

type Props = {
  showSignUpForm?: () => void;
};

type Values = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  lastname: string;
  city: string;
  phone: string;
};

const SignUp = ({ showSignUpForm }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isError, error, mutateAsync, isLoading } = useMutation('signup', (data: NewUser) =>
    SkyvitoService.createUser(data)
  );

  const {
    mutateAsync: signInMutate,
    isError: isSignInError,
    error: signInError,
    isLoading: isSignInLoading
  } = useMutation('signIn', (data: SignInProps) => SkyvitoService.signIn(data), {
    onSuccess: () => {
      navigate('/');
    }
  });

  const submitHandler = async (values: Values) => {
    const newUser: NewUser = {
      password: values.password,
      role: 'user',
      email: values.email,
      name: values.name,
      surname: values.lastname,
      phone: values.phone,
      city: values.city
    };

    const signUpFetch = await mutateAsync(newUser);

    if (signUpFetch) {
      await SignInHandler(values, signUpFetch.data.id);
    }

    if (isError) {
      console.log(error);
    }
  };

  const SignInHandler = async (signInValues: SignInProps, id: string) => {
    const credentials: SignInProps = {
      email: signInValues.email,
      password: signInValues.password
    };

    const { data } = await signInMutate(credentials);

    if (data) {
      dispatch(
        signIn({
          token: data.access_token
        })
      );

      dispatch(
        writeUserId({
          id: id
        })
      );

      Cookies.set('access', data.access_token);
      Cookies.set('refresh', data.refresh_token);

      axios.defaults.headers.common = { Authorization: `Bearer ${data.access_token}` };

      if (showSignUpForm) {
        showSignUpForm();
      }
    }

    if (isSignInError) {
      console.log(signInError);
    }
  };

  return (
    <S.Container>
      <FullLogo />
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          lastname: '',
          city: '',
          phone: ''
        }}
        validationSchema={signUpSchema}
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
            <S.AuthField
              name="confirmPassword"
              type="password"
              placeholder="Повторите пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <S.ErrorFieldConfirmPassword>{errors.confirmPassword}</S.ErrorFieldConfirmPassword>
            )}
            <S.AuthField
              name="name"
              type="text"
              placeholder="Имя (необязательно)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <S.AuthField
              name="lastname"
              type="text"
              placeholder="Фамилия (необязательно)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
            />
            <S.AuthField
              name="city"
              type="text"
              placeholder="Город (необязательно)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
            <S.AuthField
              name="phone"
              type="text"
              placeholder="Телефон (необязательно)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {isError && (
              <S.ErrorSignUpFromServerField>
                {Array.isArray((error as ApiError).response?.data.detail)
                  ? (error as ApiError).response?.data.detail[0].msg
                  : (error as ApiError).response?.data.details?.includes('UNIQUE')
                  ? 'Такая почта уже зарегистрирована'
                  : (error as ApiError).response?.data.message}
              </S.ErrorSignUpFromServerField>
            )}
            <UIButton
              buttonClassType="signUpSecond"
              text={isLoading || isSignInLoading ? 'Регистрация' : 'Зарегистрироваться'}
              type="submit"
              disabled={!isValid || isLoading || isSignInLoading}
              onClick={handleSubmit}
            />
          </S.AuthForm>
        )}
      </Formik>
    </S.Container>
  );
};

export default SignUp;
