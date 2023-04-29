import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const SaveButton = styled.button`
  width: 154px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Regular', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  background: ${color.buttonPrimary};
  border-radius: 6px;
  border: 0;
  color: ${color.buttonTextLight};

  &:hover {
    background: ${color.buttonPrimaryHover};
  }

  &:disabled {
    background: ${color.buttonNotActive};
  }

  @media (${device.mobileL}) {
    width: 279px;
  }
`;

export const PlacementButton = styled(SaveButton)`
  width: 232px;
  height: 40px;
  background: ${color.buttonHeaderRegular};
  border: 1px solid ${color.buttonBorderLight};

  &:hover {
    background: ${color.buttonHeaderHover};
  }
`;

export const SearchButton = styled(SaveButton)`
  width: 197px;
  height: 50px;
`;

export const AuthButton = styled(PlacementButton)`
  width: 224px;
  height: 40px;
`;

export const SignInButton = styled(SaveButton)`
  width: 278px;
  height: 52px;
`;

export const SignUpButton = styled(SaveButton)`
  width: 278px;
  height: 52px;
  background-color: ${color.buttonSecondary};
  border: 1px solid #d9d9d9;
  color: ${color.buttonTextDark};

  &:hover {
    background-color: ${color.buttonSecondaryHover};
  }
`;

export const SignUpButtonSecond = styled(SaveButton)`
  width: 278px;
  height: 52px;
`;

export const PhoneButton = styled(SaveButton)`
  width: 214px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 140%;
  color: ${color.buttonTextLight};

  @media (${device.mobileL}) {
    font-weight: 400;
    width: 278px;
    height: 57px;
  }
`;

export const EditAdButton = styled(SaveButton)`
  width: 181px;

  @media (${device.mobileL}) {
    width: 278px;
  }
`;

export const ReviewButton = styled(SaveButton)`
  width: 181px;

  @media (${device.mobileL}) {
    width: 278px;
  }
`;

export const DeleteButton = styled(SaveButton)`
  width: 225px;

  @media (${device.mobileL}) {
    width: 278px;
  }
`;
