import styled from 'styled-components';
import { Field, Form } from 'formik';

import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const Container = styled.div`
  width: 366px;
  padding: 47px 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${color.bgPrimary};
  border-radius: 12px;

  @media (${device.mobileL}) {
    width: 320px;
    padding: 47px 20px;
  }
`;

export const AuthForm = styled(Form)`
  position: relative;
  width: 100%;
  margin-top: 42px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthField = styled(Field)`
  width: 100%;
  height: 24px;
  margin-bottom: 38px;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.isErrorField ? color.borderInputError : color.borderInput)};

  &::placeholder {
    font-family: 'Roboto Regular', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: ${color.textPlaceholder};
  }

  &:last-of-type {
    margin-bottom: 60px;
  }

  @media (${device.mobileL}) {
    width: 100%;
    height: 40px;
    padding-left: 17px;
    padding-right: 17px;
    border: 1px solid #d9d9d9;
    border-radius: 30px;
  }
`;

export const ErrorFieldEmail = styled.p`
  position: absolute;
  top: 30px;
  width: 100%;
  margin-bottom: 5px;
  font-size: 12px;
  line-height: 24px;
  color: ${color.textError};
  text-align: start;

  @media (${device.mobileL}) {
    top: 35px;
  }
`;

export const ErrorFieldPassword = styled(ErrorFieldEmail)`
  top: 90px;

  @media (${device.mobileL}) {
    top: 114px;
  }
`;

export const ErrorFieldConfirmPassword = styled(ErrorFieldEmail)`
  top: 150px;

  @media (${device.mobileL}) {
    top: 192px;
  }
`;

export const ErrorSignInFromServerField = styled(ErrorFieldEmail)`
  top: 110px;
  text-align: center;
`;

export const ErrorSignUpFromServerField = styled(ErrorFieldEmail)`
  top: 520px;
`;
