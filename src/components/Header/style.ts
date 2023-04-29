import styled from 'styled-components';
import { color } from '../../styles/colors';
import { Link } from 'react-router-dom';
import { device } from '../../styles/sizes';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 79px;
  margin-bottom: 43px;
  padding-right: 143px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${color.bgHeader};

  @media (${device.mobileL}) {
    margin-bottom: 0;
    padding: 11px 18px 12px 17px;
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: block;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const MobileControls = styled.div`
  display: none;

  @media (${device.mobileL}) {
    display: block;
  }
`;

export const ProfileLink = styled(Link)`
  width: 173px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Regular', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 150%;
  border-radius: 6px;
  color: ${color.buttonTextLight};
  background: ${color.buttonHeaderRegular};
  border: 1px solid ${color.buttonBorderLight};

  &:hover {
    background: ${color.buttonHeaderHover};
  }
`;
