import styled from 'styled-components';
import { device } from '../../styles/sizes';
import { color } from '../../styles/colors';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: none;
  width: 100%;
  height: 54px;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: ${color.bgPrimary};

  @media (${device.mobileL}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  }
`;
