import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../styles/colors';
import { device } from '../../styles/sizes';

export const Container = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${device.mobileL}) {
    width: 137px;
    max-height: 293px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 270px;

  @media (${device.mobileL}) {
    width: 137px;
    height: 132px;
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  @media (${device.mobileL}) {
    justify-content: space-between;
    padding-left: 10px;
    padding-bottom: 20px;
  }
`;

export const TitleLink = styled(Link)`
  height: 55px;
  font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
  font-size: 22px;
  line-height: 120%;
  color: ${color.textBlue};

  &:hover {
    color: ${color.textBlueHover};
  }

  @media (${device.mobileL}) {
    font-size: 14px;
    height: 35px;
  }
`;

export const Price = styled.p`
  font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
  font-size: 22px;
  line-height: 150%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 16px;
  }
`;

export const CityTimeBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

export const CityTimeText = styled.p`
  font-size: 16px;
  line-height: 130%;
  color: ${color.textGray};

  @media (${device.mobileL}) {
    font-size: 12px;
  }
`;
