import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const SearchContainer = styled.section`
  width: 100%;
  display: none;

  @media (${device.mobileL}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.form`
  width: 100%;
  height: 32px;
  margin-bottom: 0;
  display: flex;
  gap: 16px;
  border-radius: 30px;
`;

export const SearchInput = styled.input`
  width: 243px;
  margin-left: 0;
  padding-left: 19px;
  font-family: 'Roboto Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid ${color.inputBorderInactive};
  border-radius: 30px;
  height: 32px;

  &::placeholder {
    font-size: 14px;
    color: ${color.inputPlaceholder};
  }
`;
