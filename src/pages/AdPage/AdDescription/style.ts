import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${device.mobileL}) {
    padding-left: 20px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto Bold', sans-serif;
  font-size: 32px;
  line-height: 220%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  max-width: 792px;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 14px;
  }
`;
