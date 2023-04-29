import styled from 'styled-components';
import { device } from '../../styles/sizes';

export const Main = styled.main`
  padding-right: 141px;
  padding-left: 141px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${device.mobileL}) {
    padding-right: 18px;
    padding-left: 18px;
  }
`;
