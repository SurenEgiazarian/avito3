import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const SearchContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const Wrapper = styled.form`
  width: 100%;
  margin-bottom: 43px;
  display: flex;
  gap: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-left: 60px;
  padding-left: 19px;
  font-family: 'Roboto Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid ${color.inputBorderInactive};
  border-radius: 6px;

  &::placeholder {
    color: ${color.inputPlaceholder};
  }
`;
