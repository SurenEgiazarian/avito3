import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { Link } from 'react-router-dom';
import { device } from '../../../styles/sizes';

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  @media (${device.mobileL}) {
    padding-left: 20px;
    padding-top: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 18px;
  }
`;

export const AdditionalInformation = styled.div`
  margin-bottom: 34px;
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
    font-size: 14px;
  }
`;

export const Reviews = styled.a`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: ${color.textBlue};

  &:hover {
    color: ${color.textBlueHover};
  }

  @media (${device.mobileL}) {
    font-size: 14px;
  }
`;

export const Price = styled.p`
  margin-bottom: 20px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 18px;
  }
`;

export const SellerBlock = styled.div`
  margin-top: 34px;
  display: flex;
  gap: 12px;
`;

export const SellerAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: ${color.bgSkeleton};
  border-radius: 50%;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellerName = styled(Link)`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color: ${color.textBlue};

  @media (${device.mobileL}) {
    font-size: 18px;
  }
`;

export const SellerDate = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 200%;
  color: ${color.textGray};

  @media (${device.mobileL}) {
    font-size: 14px;
  }
`;

export const EditButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (${device.mobileL}) {
    flex-direction: column;
  }
`;
