import styled from 'styled-components';
import { device } from '../../styles/sizes';

export const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (${device.mobileL}) {
    font-size: 14px;
  }
`;
