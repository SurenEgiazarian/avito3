import styled from 'styled-components';
import { device } from '../../../styles/sizes';

export const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const PhotoWrapper = styled.div`
  width: 480px;
  height: 480px;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const PreviewPhotosContainer = styled.div`
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: none;
  width: 320px;
  height: 320px;
  overflow: hidden;

  @media (${device.mobileL}) {
    display: block;
  }
`;

export const BackArrowWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 99;
`;
