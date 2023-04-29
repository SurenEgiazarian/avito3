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

export const Title = styled.h2`
  font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
  font-size: 32px;
  line-height: 220%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 18px;
    line-height: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  justify-content: start;

  @media (${device.mobileL}) {
    gap: 10px;
  }
`;
