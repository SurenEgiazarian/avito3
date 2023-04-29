import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const AdsContainer = styled.section`
  width: 100%;
  padding-bottom: 37px;
`;

export const Title = styled.h1`
  font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 220%;

  @media (${device.mobileL}) {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 26px;

  @media (${device.mobileL}) {
    gap: 10px;
    justify-content: center;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Message = styled.p`
  width: 100%;
  text-align: center;
  font-size: 36px;
  color: ${color.textGray};
`;
