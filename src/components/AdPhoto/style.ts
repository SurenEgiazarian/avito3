import styled from 'styled-components';
import { device } from '../../styles/sizes';

export const LoaderWrapper = styled.div<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? 'none' : 'flex')};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  cursor: pointer;
  object-fit: fill;

  @media (${device.mobileL}) {
    width: 137px;
    height: 132px;
  }
`;

export const Avatar = styled.img<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  cursor: pointer;
  border-radius: 50%;
`;
