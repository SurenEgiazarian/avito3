import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${device.mobileL}) {
    height: 900px;
    top: 500px;
    flex-direction: column;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 0;
    overflow-y: scroll;
  }
`;

export const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 999;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

  @media (${device.mobileL}) {
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 0;
    overflow-y: scroll;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
  color: ${color.textPlaceholder};

  &:hover {
    cursor: pointer;
    color: ${color.buttonPrimary};
  }

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;

  @media (${device.mobileL}) {
    background: white;
    opacity: 1;
  }
`;
