import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Title = styled.h3`
  font-family: 'Roboto Bold', sans-serif;
  font-size: 32px;
  line-height: 220%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 18px;
  }
`;

export const AdsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 26px;

  @media (${device.mobileL}) {
    gap: 10px;
  }
`;

export const Message = styled.p`
  width: 100%;
  text-align: center;
  font-size: 36px;
  color: ${color.textGray};
`;
