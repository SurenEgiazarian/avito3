import styled from 'styled-components';
import { device } from '../../styles/sizes';

export const Container = styled.main`
  padding-right: 141px;
  padding-left: 141px;
  padding-bottom: 79px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (${device.mobileL}) {
    padding-right: 0;
    padding-left: 0;
    align-items: center;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 59px;

  @media (${device.mobileL}) {
    gap: 0;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
