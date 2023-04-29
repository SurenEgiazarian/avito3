import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../styles/colors';
import { device } from '../../styles/sizes';

export const Container = styled.nav`
  width: 100%;
  margin-bottom: 77px;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const NavigateLink = styled(Link)`
  width: 241px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Regular', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  background: ${color.buttonPrimary};
  border-radius: 6px;
  border: 0;
  color: ${color.buttonTextLight};

  &:hover {
    background: ${color.buttonPrimaryHover};
  }
`;
